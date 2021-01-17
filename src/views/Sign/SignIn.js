import { useState } from "react";
import { Layout, Col, Row, Form, Input, Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import imgSignIn from "../../assets/img/signIn.jpg";
import { signIn } from "../../store/Sign/sign.action";
import { userConfirm } from "../../services/authService";
import { toastr } from "react-redux-toastr";

const { Content } = Layout;



const LogIn = () => {
    const [showModal, setShowModal] = useState(false);
    const [modeLogar, setModeLogar] = useState(true);
    const [isLoading, setIsloading] = useState(false);
    const dispatch = useDispatch();
    const [form, setForm] = useState({});
    const [form2, setForm2] = useState({});

    const closeModalForm = () => setShowModal(false);

    const handleChange = (props) => {
        const { value, name } = props.target;
        setForm({
            ...form,
            [name]: value,
        });
    };


    const handleChange2 = (props) => {
        const { value, name } = props.target;
        setForm2({
            ...form2,
            [name]: value,
        });
    };

    /**Login de user cadastrado chama dispatch(signIn(form)) */
    const submitForm = async () => {
        setIsloading(true)
        await dispatch(signIn(form))
        .then((r)=> setIsloading(false))
        .finally((r)=> setIsloading(false))

    };

    /** chama dispatch(registrar-se(form)) */
    const registerSubmitForm = async () => {
        setIsloading(true)
        await userConfirm(form2)
            .then((res) => {
                setShowModal(true)
                setIsloading(false)
            })
            .catch((err)=> {
                setIsloading(false)
                const options = {
                    position: 'top-center', transitionIn: 'bounceIn', transitionOut: 'bounceOut'
                }
                toastr.error(`Não foi possível fazer a solicitação. ${err.response.data.msg}`, options);  
            })
    };

    const login = (
        <FormLogin>
            <Form
                initialValues={{
                    // ...form,
                }}
            >
                <Form.Item name="email">
                    <Input
                        name="email"
                        value={form.email || ""}
                        onChange={handleChange}
                        placeholder="Entre com seu e-mail"
                    />
                </Form.Item>

                <Form.Item name="password">
                    <Input.Password
                        value={form.password || ""}
                        name="password"
                        onChange={handleChange}
                        placeholder="Entre com sua senha" />
                </Form.Item>

                <Form.Item>
                    <Button loading={isLoading} onClick={submitForm} type="primary" htmlType="submit">
                        Enviar
                </Button>

                </Form.Item>
            </Form>
        </FormLogin>
    )


    /**Form para cadastro denovo usuário */
    const newAccount = (
        <FormLogin>

            <Form
                initialValues={{
                    ...form2,
                }}
            >


                <Form.Item name="name">
                    <Input
                        name="name"
                        value={form2.name || ""}
                        onChange={handleChange2}
                        placeholder="Nome"
                    />
                </Form.Item>

                <Form.Item name="username">
                    <Input
                        name="username"
                        value={form2.username || ""}
                        onChange={handleChange2}
                        placeholder="Nome de usuário"
                    />
                </Form.Item>


                <Form.Item name="email">
                    <Input
                        name="email"
                        value={form2.email || ""}
                        onChange={handleChange2}
                        placeholder="Email"
                    />
                </Form.Item>


                <Form.Item>
                    <Button loading={isLoading} onClick={registerSubmitForm} type="primary" htmlType="submit">
                        Enviar
                    </Button>
                </Form.Item>
            </Form>
        </FormLogin>
    )

    /**popup de confirmação de envio de email para novo user */
    const ModalForm = () => (
        <Modal
            title={`Confirmar Email`}
            visible={showModal}
            footer={false}
            onCancel={closeModalForm}
        >
            <p>{`Enviamos uma mensagem de confirmação para o email ${form2.email} solicitando a confirmação do cadastro.`}</p>

        </Modal>
    );



    return (
        <Layout className="layout">
            <ModalForm />
            <Main>
                <BgImg />
                <br /><br />
                <SliceBg >
                    Coders
                  <span>The Coders Network</span>
                </SliceBg>
                <br />
                <br />



                <FormLogin>

                    <Row>
                        
                        <Col span="12">
                            <Button onClick={() => setModeLogar(true)} ghost={!modeLogar} type="primary" block htmlType="submit">
                                ENTRAR
                        </Button>
                        </Col>

                        <Col span="12">
                            <Button onClick={() => setModeLogar(false)} ghost={modeLogar} type="primary" block htmlType="submit">
                                CADASTRAR-SE
                        </Button>

                        </Col>
</Row>
                        
                    

                </FormLogin>
{modeLogar ? login : newAccount}

            </Main>
        </Layout>
    );
};

export default LogIn;


const Main = styled(Content)`
  display: flex;
  flex-direction:column;
  height: 100vh;
  
`;





const SliceBg = styled.div`
  /* height: 100vh; */
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif, "Goldman", cursive;

  color: black;
  text-shadow: 4px 4px 2px #43949e;
  line-height: 1;
  span {
    font-family: "Goldman", cursive;

    font-size: 20pt;
    font-weight: 400;
    text-shadow: none;
  }
`;

const BgImg = styled.div`
  position: absolute;
  display: block;
  height: 100vh;
  width: 100%;
  background-color: #fff;
  background-image: url(${imgSignIn});
  background-size: cover;
  background-position: center;
  opacity: 0.4;
`;


const FormLogin = styled.div`
  padding: 20px ;
  /* width: 100%; */
  align-self: center;
  width: 95vw;
  max-width: 600px;
  
  background-color: black;  
`;
