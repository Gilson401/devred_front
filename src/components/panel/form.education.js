import { useEffect, useState } from "react";
import {
  Form,
  Button,
  Input,
  Row,
  Col,
  Select,
  Switch,
  DatePicker,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AddEducation } from "../../store/User/user.action";
import locale from "antd/es/date-picker/locale/pt_BR";
// import 'moment/locale/pt-br';
const { TextArea } = Input;

const { Option } = Select;

const FormPost = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [form, setform] = useState({

  });

  
  const handleSubmit = (v) => {
    dispatch(AddEducation(v));
    props.changeViewPanel(0)
  };

  useEffect(() => {
 
  }, [profile]);

  return (
    <ContainerForm>
      <Col span={12}>
        <Form name="basic" initialValues={profile} onFinish={handleSubmit}>
          <Form.Item name="current" label="Atual:">
            <Switch
              checked={form.current}
              checkedChildren="Sim"
              unCheckedChildren="Não"
              defaultChecked
            />
          </Form.Item>
          <Form.Item name="school">
            <Input placeholder="Insira um Escola/Instituição" name="school" />
          </Form.Item>
          <Form.Item name="degree">
            <Select
              style={{ width: 120 }}
              name="degree"
              placeholder="nivel do curso"
            >
              <Option value="fundamental">Fundamental</Option>
              <Option value="medio">Médio</Option>
              <Option value="graduacao">Graduação</Option>
              <Option value="pos_graduacao">Pós Graduação</Option>
              <Option value="mestrado">Mestrado</Option>
              <Option value="doutorado">Doutorado</Option>
              <Option value="escola">Escola</Option>
              <Option value="tecnico">curso_tecnico</Option>
            </Select>
          </Form.Item>
          <Form.Item name="fieldofstudy">
            <Input
              placeholder="Insira uma area de estudo"
              name="fieldofstudy"
            />
          </Form.Item>
          <Row>
            <Col span={6}>
              <Form.Item name="from" label="Início">
                <DatePicker name="from" locale={locale} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="to" label="Final">
                <DatePicker name="date" locale={locale} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="description">
            <TextArea name="description" showCount maxLength={150} />
          </Form.Item>
          <br />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </ContainerForm>
  );
};

export default FormPost;

const ContainerForm = styled(Row)`
  margin-top: 20px;
`;
