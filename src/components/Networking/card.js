import { Tooltip, Card } from "antd";

import { toastr } from "react-redux-toastr";
import avatar from '../../../src/assets/img/avatar.png'
import {
  LikeOutlined,
  UserAddOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

// toastr.error("Cadastro de postagem feito com sucesso.");

const key = "updatable";
/**Card com fotos dos amigos e sugestões de amigos
 * props: cover(imagem), username, id
 */
const CardNetworking = (props) => {

  const openNotification = (msg) => {
    toastr.info(msg);
  };

  return (
    <CardStyled
      cover={<img alt="example" src={props.picture || avatar} />}
    //   cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      actions={[
        <Tooltip placement="top" title="Curtir">
          <LikeOutlined onClick={()=>openNotification("Curtiu")} />
        </Tooltip>,
        <Tooltip placement="top" title="Adicionar">
          <UserAddOutlined onClick={()=>openNotification("Adicionou")} />
        </Tooltip>,
        <Tooltip placement="top" title="Favoritar">
          <HeartOutlined onClick={()=>openNotification("Favoritou")} />
        </Tooltip>,
      ]}
    >
      <Title size="18">{props.username}</Title>
      {/* TODO: confirmar o campo que vai puxar abaixo 
      em tese seia o "cargo do usuário" mas este campoi não existe no schema*/}
      <Title size="12">{props.id}</Title>
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
