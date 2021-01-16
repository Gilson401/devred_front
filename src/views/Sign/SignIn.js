import { useState } from "react";
import { Layout, Col, Row, Form, Input, Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import imgSignIn from "../../assets/img/signIn.jpg";
import { signIn } from "../../store/Sign/sign.action";
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const { Content } = Layout;

const LogIn = () => {
    const [showModal, setShowModal] = useState(false);
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

    /** chama dispatch(signIn(form)) */
    const submitForm = () => {

        dispatch(signIn(form));
    };



    /** chama dispatch(registrar-se(form)) */
    const registerSubmitForm = () => {
        setShowModal(true)

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
                    <Button onClick={submitForm} type="primary" htmlType="submit">
                        Enviar
                </Button>

                </Form.Item>
            </Form>
        </FormLogin>
    )



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
                    <Button onClick={registerSubmitForm} type="primary" htmlType="submit">
                        Enviar
                    </Button>
                </Form.Item>
            </Form>
        </FormLogin>
    )

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

    function callback(key) {
        console.log(key);
    }

    return (
        <Layout className="layout">
            <ModalForm />
            <Main>
                <BgImg />
                <br/><br/>
                <SliceBg >
                    Coders
                  <span>The Coders Network</span>
                </SliceBg>
                <br/>
                <br/>

                <FormLogin>
                <Tabs onChange={callback} type="card">
                    <TabPane  tab={<Styledh>Entrar</Styledh>} key="1">
                        
                        {login}
                    </TabPane>

                    <TabPane tab={<Styledh>Nova conta</Styledh>} key="2">
                        
                        {newAccount}
                    </TabPane>
                </Tabs>
                </FormLogin>


            </Main>
        </Layout>
    );
};

export default LogIn;



const Main = styled(Content)`
  display: flex;
  flex-direction:column;
  height: 100vh;
 
 .ant-tabs-tab{
    background-color: rgba(10,10,10,0.9);
 }
`;
// background


const Styledh = styled.p`
margin: 10px;
width:100%;
  font-size: 2rem;
  font-weight: 10;
  color: black;
  font-family: "Goldman",Arial, Helvetica, sans-serif,  cursive;
  /* text-shadow: 4px 4px 2px #43949e; */
  /* background-color: rgba(10,10,10,0.7); */
`


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
  background-size: auto 100%;
  background-position: center;
  opacity: 0.4;
`;


const FormLogin = styled.div`
  padding: 20px;
  /* width: 100%; */
  align-self: center;
  background-color: rgba(10,10,10,1.9);
`;
