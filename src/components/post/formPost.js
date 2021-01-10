import { useEffect, useState } from "react";
import { Form, Button, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { actionGetTopic } from "../../store/Topics/topics.action";

const { TextArea } = Input;
const { Option } = Select;

/** Form de cadastro de post,  comment .  
 * content - string  author - fkuser  topic - fk topic
 * RECEBE A FUNÇÃO DE SUBMIT DE SEU PAI
 */
const FormPost = ({showTitleInput ,  showTopics,  submit, post}) => {

    const [form, setform] = useState({});

    const user = useSelector(state => state.user.profile)

    const topicsList = useSelector((state) => state.topics.topic)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        //TODO: Este setform precisa receber um topic não mockado, mas ainda não foi criado pelo front 13/12/2020
        setform({
            ...form,
            [name]: value,
            author: user._id,
            // topic: props.contexto, TODO, necessário?
            post: post //|| "5fca4990658d23426c92e240"
        });
    };

    /**Handlers específico para select. */
    const handleSelectInterest = (value) => {
        setform({
            ...form,
            topic: value,
        });
    }

    //Isso aqui é real?

    useEffect(() => {
        dispatch(actionGetTopic())
    }, [dispatch])

    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={() => { }}
            onFinishFailed={() => { }}
        >

            {showTitleInput ?
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: "Favor insira um titulo" }]}
                >
                    <Input
                        placeholder="Titulo da postagem"
                        name="title"
                        onChange={handleChange}
                    />
                </Form.Item>
                : ""}
            {showTopics ?
                <Form.Item name="topic" span={12} >
                    <Select style={{ width: '100%' }} name="topic" onChange={handleSelectInterest} placeholder="Pesquise tópicos de interesse">
                        {topicsList.map((item) => <Option value={item._id || ""}>{item.title || ""}</Option>)}
                    </Select>
                </Form.Item>
                : ""}

            <Form.Item
                name="content"
                rules={[{ required: true, message: "Insira um content..." }]}
            >
                <TextArea
                    placeholder="content"
                    showCount
                    maxLength={50}
                    name="content"
                    onChange={handleChange}
                />
            </Form.Item>

            <br />
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    onClick={(event) => submit(event, form)}
                >
                    Publicar
        </Button>
            </Form.Item>
        </Form>
    );
};

export { FormPost };
