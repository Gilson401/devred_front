import { Button, Form, Input, Row, Col, Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { getProfile } from "../../store/User/user.action";
import { AntdConfirmation } from "../../util/util";
const { Option } = Select;

const FormEducation = () => {
    const [form, setForm] = useState({
    });

    //No Componente que vai demandar o state
    const dispatch = useDispatch()
    const profile = useSelector(state => state.user.profile)   

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])

    const handleChange = (props) => {
        const { value, name } = props.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSelect = (value) => {
        setForm({
            ...form,
            gender: value,
        });
    }

    const submitForm = () => {
        console.log("idofgjpdfi,")
    };

    const submitForm2 = () => {
        console.log("form")
    };

    return (
        <Row>

            <ColStyled span={12} >
                <Form
                    initialValues={{
                        ...profile
                    }}
                >
                    <Form.Item name="name">
                        <Input
                            name="name"
                            value={form.name || ""}
                            onChange={handleChange}
                            placeholder="Entre com seu Nome"
                        />
                    </Form.Item>
                    <Form.Item name="email">
                        <Input
                            name="email"
                            value={form.name || ""}
                            onChange={handleChange}
                            placeholder="Entre com seu e-mail"
                        />
                    </Form.Item>
                    <Form.Item name="username">
                        <Input
                            name="username"
                            value={form.username || ""}
                            onChange={handleChange}
                            placeholder="Entre com seu Nick name"
                        />
                    </Form.Item>

                    <Form.Item name="place">
                        <Input
                            name="place"
                            value={form.place || ""}
                            onChange={handleChange}
                            placeholder="Entre com seu Local"
                        />
                    </Form.Item>
                    <Form.Item name="gender" >
                        <Select style={{ width: 120 }} name="gender" onChange={handleSelect} placeholder="Sexo">
                            <Option value="masculino">Masculino</Option>
                            <Option value="feminino">Feminino</Option>
                            <Option value="NaN">NaN</Option>
                        </Select>

                    </Form.Item>
                    <Form.Item
                        value={form.password || ""}
                        name="password"
                        onChange={handleChange}
                        placeholder="Entre com sua senha"
                    >
                        <Input.Password placeholder="Entre com sua senha" />
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


export default FormEducation

const ColStyled = styled(Col)`
    margin: 20px;
    min-width: 500px !important;
`
