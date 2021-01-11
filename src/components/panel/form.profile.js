import { Button, Form, Input, Row, Col, Select,  Progress } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toastr } from "react-redux-toastr";
import styled from "styled-components";
import { getProfile } from "../../store/User/user.action";
import { updateUserService } from "../../services/userService";

const { Option } = Select;

const FormProfile = () => {
    const [form, setForm] = useState({
    });
    const [progress, setProgress] = useState(0)
    //No Componente que vai demandar o state
    const dispatch = useDispatch()
    const profile = useSelector(state => state.user.profile)
    const inputEl = useRef(null)
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

    /**Handlers específico para gender. */
    const handleSelectGender = (value) => {
        setForm({
            ...form,
            gender: value,
        });
    }


    /**Handlers específico para picture. */
    const handleSelectPicture = (attr) => {

        const { value, name } = attr.target
        console.log("value, name", value, name)
        console.log("attr.target,", attr.target.files[0].name)

        if (name === 'picture') {
            setForm({
                ...form,
                'picture': attr.target.files[0]
            })
        }

    }

    const submitForm = async () => {


        let data = new FormData()
        Object.keys(form).forEach(key => data.append(key, form[key]))
        
        const config = {
            onUploadProgress: function (progressEvent) {
                let successPercent = Math.round(progressEvent.loaded * 100 / progressEvent.total)
                // 
                setProgress(successPercent)
            },
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        await  updateUserService(profile._id, data, config)
               .then((res) => {
                toastr.success("Sucesso.", "Cadastro feito com sucesso.");
            })
            .catch((err) => toastr.error(`Erro no cadastro: ${err.message}`))
            .finally(()=>setProgress(0))
        
    }


    const clickopenfile = ()=>{
        inputEl.current.click()
    }

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
                            value={form.email || ""}
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
                        <Select style={{ width: 120 }} name="gender" onChange={handleSelectGender} placeholder="Sexo">
                            <Option value="Male">Masculino</Option>
                            <Option value="Female">Feminino</Option>
                            <Option value="NaN">NaN</Option>
                            <Option value="No coments">No coments</Option>
                        </Select>

                    </Form.Item>
                    
                    

                    <Form.Item>
                        <Button onClick={clickopenfile} type="primary" htmlType="submit">
                           Escolher Foto
                        </Button>
                        <span>{form.picture?.name}</span>
                        <Inputf>
                        <input ref={inputEl} id="inpute" name="picture" type="file" onChange={handleSelectPicture} />
                       {progress > 0 ? <Progress strokeLinecap="square" percent={progress} />:""}
                        <br /><br />
                    </Inputf>
                    </Form.Item>



                    <Form.Item name="password">
                        <Input.Password 
                        value={form.password || ""}
                        name="password" 
                        onChange={handleChange}
                        placeholder="Entre com sua senha" 
                        />
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


export default FormProfile

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