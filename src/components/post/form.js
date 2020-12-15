import { useState } from "react";
import { Form, Button, Input } from "antd";
import { useSelector } from "react-redux";
const { TextArea } = Input;



/**Form de cadastro de post, topic.  
 * content - string
 * author - fkuser
 * topic - fk topic
 */
const FormPost = (props) => {

    const [form, setform] = useState({});

    const user = useSelector(state => state.user.profile)

    const handleChange = (e) => {
        const { name, value } = e.target;
        //TODO: Este setform precisa receber um topic não mockado, mas ainda não foi criado pelo front 13/12/2020
        setform({
            ...form,
            [name]: value,
            author: user._id,
            topic: props.contexto || "5fca4990658d23426c92e240"
        });
    };

    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={() => { }}
            onFinishFailed={() => { }}
        >
            <Form.Item
                name="title"
                rules={[{ required: true, message: "Favor insira um titulo" }]}
            >
                <Input
                    placeholder="Titulo da postagemh"
                    name="title"
                    onChange={handleChange}
                />
            </Form.Item>

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
                    onClick={(event) => props.submit(event, form)}
                >
                    Publicar
        </Button>
            </Form.Item>
        </Form>
    );
};

export default FormPost;
