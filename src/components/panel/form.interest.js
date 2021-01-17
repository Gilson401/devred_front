import { Button, Form, Row, Col, Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toastr } from "react-redux-toastr";
import styled from "styled-components";
import { actionGetTopic } from '../../store/Topics/topics.action'
import {
    actionAddUserInterestTopic,
} from '../../store/Interests/interests.action'
import {addCodersPref} from '../../config/auth'


const { Option } = Select;

// em Userschema o topics_of_interest é um FK de topic assim, se for seguir ao pé da letra o que foi pensado,
// o cadastro de topics_of_interest deve ser restrito aos tópicos existentes na rede. 
// Mas o user poderá cadastrar um novo topico?


const FormInterest = () => {
    const [form, setForm] = useState({});
    const dispatch = useDispatch()
    const topicsList = useSelector((state) => state.topics.topic)

    useEffect(() => {
        dispatch(actionGetTopic())
    }, [dispatch])


    /**Handlers específico para select. */
    const handleSelectInterest = (value) => {
        setForm({
            ...form,
            topics_of_interest: value,
        });
    }

    const submitForm = async () => {
        await dispatch(actionAddUserInterestTopic(form))
            .then((res) => {
                toastr.success("Sucesso.", "Cadastro feito com sucesso.");
                addCodersPref(form.topics_of_interest)
                dispatch({ type: "ADD_IN_USER_INTERESTS", userInterests: form });
                setForm({  });
            })
            .catch((err) => toastr.error(`add interest error : ${err.message}`))
    }

   

    return (
        <Row>

            <ColStyled span={24} >

                {/* <Complete/> */}
                <br /><br /><br />
                <Form initialValues={{}} >


                    <Form.Item name="topics_of_interest" span={12} >
                        <Select style={{ width: 500 }} name="topics_of_interest" onChange={handleSelectInterest} placeholder="Pesquise tópicos de interesse">

                            {topicsList.map((item) => <Option value={item._id || ""}>{item.title || ""}</Option>)}

                        </Select>

                    </Form.Item>
                    <Form.Item span={12}>
                        <Button disabled={!form.topics_of_interest} onClick={submitForm} type="primary" htmlType="submit">
                            Adicionar
                        </Button>
                    </Form.Item>


                </Form>
            </ColStyled>
        </Row>
    )
}


export default FormInterest

const ColStyled = styled(Col)`
    margin: 20px;
    min-width: 500px !important;
`

