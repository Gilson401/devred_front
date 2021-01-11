import { Button, Form, Input, Row, Col } from "antd";
import {  useState } from "react";
import { toastr } from "react-redux-toastr";
import styled from "styled-components";
import { addSkillService } from "../../services/userService";

const FormSkill = () => {
    const [antForm] = Form.useForm()
    const [form, setForm] = useState({
    });
 

    const handleChange = (props) => {
        const { value, name } = props.target;
        setForm({
            ...form,
            [name]: value,
        });
    };


    
    const submitForm = async () => {

         await  addSkillService( form)
               .then((res) => {

                toastr.success("Sucesso.", "Cadastro de Skill feito com sucesso.");
                
            })
            .catch((err) => toastr.error(`Erro no cadastro de Skill: ${err.message}`))
            antForm.resetFields()
    }

    return (
        <Row>

            

            <ColStyled span={12} >
            <h3>Adicionar Skill</h3>
                <Form
                    initialValues={{}}
                    form={antForm}
                >
                    <Form.Item name="skills">
                        <Input
                        
                            name="skills"
                            value={form.skills || ""}
                            onChange={handleChange}
                            placeholder="Informe uma skill"
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button disabled={!form.skills} onClick={submitForm} type="primary" htmlType="submit">
                            Adicionar
                        </Button>
                    </Form.Item>
                </Form>
            </ColStyled>
        </Row>
    )
}


export default FormSkill

const ColStyled = styled(Col)`
    margin: 20px;
    min-width: 500px !important;
`

