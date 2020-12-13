import LayoutBase from "../components/layout";
import Card from "../components/Networking/card";

import { Button, Collapse } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {actionGetFriendships} from '../store/Friendship/friendships.action'
import { useEffect } from "react";
const { Panel } = Collapse;
const BreadCrumb = ["Home", "Minha Rede"];

/**Componente que lista as amizades e sugestões de amizada */
const Networking = () => {


//TODO: pegar a lista de de amigos do user logado

    const amigos = useSelector(state => state.friends.friendship)
    const Actions = "";

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionGetFriendships())
    }, [])


//TODO: Pegar a lista de amigos sugeridos pata o amigo logado

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Minha Rede" actions={Actions}>

{/* <Form.Item> */}
        <Button
          type="primary"
          htmlType="submit"
          onClick={(event) => console.log("ddddd", amigos)}
        >
          Publicar
        </Button>
      {/* </Form.Item> */}

      <Collapse defaultActiveKey={["1"]}>

        <PanelStyled header="AMIGOS" key="1">

          <BoxCard>

            {amigos.map((v, i) => (
              <Card key={i} picture={v.picture} username={v.username} id={v._id} />
            ))}

          </BoxCard>

        </PanelStyled>



        <PanelStyled header="SUGESTÃO DE AMIZADE" key="2">
          <BoxCard>
            {[...Array(10).keys()].map((v, i) => (
              <Card key={i} />
            ))}
          </BoxCard>
        </PanelStyled>
      </Collapse>
    </LayoutBase>
  );
};

export default Networking;

const BoxCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 290px));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  max-height: 700px;
  overflow-y: auto;
`;
const PanelStyled = styled(Panel)`
  .ant-collapse-header {
    background-color: #001529;
    color: #fff !important;
    margin: 10px auto;
  }
`;
