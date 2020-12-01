import { Tooltip, Card } from "antd";

import { toastr } from "react-redux-toastr";

import {
  LikeOutlined,
  UserAddOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import DevAvatar from "../../assets/img/dev.jpg";
toastr.error("Cadastro de postagem feito com sucesso.");

const key = "updatable";

const CardNetworking = () => {
  const openNotification = () => {
    toastr.info("Cadastro de postagem feito com sucesso.");
  };

  return (
    <CardStyled
      cover={<img alt="example" src={DevAvatar} />}
      actions={[
        <Tooltip placement="top" title="Curtir">
          <LikeOutlined onClick={openNotification} />
        </Tooltip>,
        <Tooltip placement="top" title="Adicionar">
          <UserAddOutlined onClick={openNotification} />
        </Tooltip>,
        <Tooltip placement="top" title="Favoritar">
          <HeartOutlined onClick={openNotification} />
        </Tooltip>,
      ]}
    >
      <Title size="18">Kabir Moareb</Title>
      <Title size="12">Desenvolvedor</Title>
    </CardStyled>
  );
};

export default CardNetworking;

const CardStyled = styled(Card)`
  width: 300px;
  border: thin solid #e7e7e7;
  border-radius: 5px;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: ${(props) => props.size + "px" || "12px"};
`;
