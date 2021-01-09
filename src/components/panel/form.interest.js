import { Button, Form, Input, Row, Col, Select, Upload, Progress } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toastr } from "react-redux-toastr";
import styled from "styled-components";
import { getProfile } from "../../store/User/user.action";
import { AntdConfirmation } from "../../util/util";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { updateUserService } from "../../services/userService";

const { Option } = Select;

const FormInterest = () => {
    const [form, setForm] = useState({
    });

    const dispatch = useDispatch()
    const profile = useSelector(state => state.user.profile)

    const handleChange = (props) => {
        const { value, name } = props.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    /**Handlers específico para gender. */
    const handleSelectGender = (value) => {
        setForm({
            ...form,
            gender: value,
        });
    }

    const submitForm = async () => {


        let data = new FormData()
        Object.keys(form).forEach(key => data.append(key, form[key]))
        
        const config = {
           
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        //todo: colocar em redux
        const content = await  updateUserService(profile._id, data, config)
               .then((res) => {

                toastr.success("Sucesso.", "Cadastro feito com sucesso.");

            })
            .catch((err) => toastr.error(`Erro no cadastro: ${err.message}`))
            
        
    }

        //import { reloaderAction } from '../../store/Reloader/reloader.action';
//const dispatch = useDispatch()
//dispatch(reloaderAction())


    return (
        <Row>

            <ColStyled span={12} >
                <Form
                    initialValues={{
                        
                    }}
                >
                    <Form.Item name="skills">
                        <Input
                            name="skills"
                            value={form.skills || ""}
                            onChange={handleChange}
                            placeholder="Informe um interesse"
                        />
                    </Form.Item>

                    <Form.Item name="gender" >
                        <Select style={{ width: 120 }} name="gender" onChange={handleSelectGender} placeholder="TODO INTERESTs">
                            <Option value="Male">Masculino</Option>
                            <Option value="Female">Feminino</Option>
                            <Option value="NaN">NaN</Option>
                            <Option value="No coments">No coments</Option>
                        </Select>

                    </Form.Item>                    

                    <Form.Item>
                        <Button onClick={submitForm} type="primary" htmlType="submit">
                            Atualizar
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

const Inputf = styled.div`
   
    cursor: pointer;

input[type="file"] {
    display: none; 
}

`