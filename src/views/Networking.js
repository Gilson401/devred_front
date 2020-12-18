import LayoutBase from "../components/layout";
import Card from "../components/Networking/card";
import avatar from '../../src/assets/img/avatar.png'
import { Button, Collapse } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {actionGetFriendships, actionGetNotFriendships} from '../store/Friendship/friendships.action'
import { useEffect } from "react";
import { getSugestedFriend } from "../services/friendshpsService";
const { Panel } = Collapse;
const BreadCrumb = ["Home", "Minha Rede"];

/**Componente que lista as amizades e sugestões de amizada */
const Networking = () => {



    const sugested_friendship  = useSelector(state => state.friends.sugested_friendship)
    const amigos = useSelector(state => state.friends.friendship)
    const amigos_id = useSelector(state => state.user.profile.friendships) || ["123456789dddd"]
    const userSkills = useSelector(state => state.user.profile.skills) || ["123456789dddd"]

    const Actions = "";

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionGetFriendships())


        const data = {
            friends: "" || amigos_id,
            skills : userSkills
        }
// debugger 
        dispatch(actionGetNotFriendships(data))

    }, [])


    useEffect(() => {
        // dispatch(actionGetFriendships())

        const data = {
            friends: amigos_id,
            skills : userSkills
        }
// debugger
        dispatch(actionGetNotFriendships(data))

    }, [])


//TODO: Pegar a lista de amigos sugeridos pata o amigo logado - 13/12/2020 ainda não implementado

const pegasugestao = async () =>{

    const data = {
        friends: amigos_id,
        skills : ["c","kof"]
    }


    console.log(data)

    await getSugestedFriend(data)
}


const stringme =(arr)=>{
    try{
    var myVar = arr.toString()
    return myVar
    }catch{
        return "Not informed"
    }
}

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Minha Rede" actions={Actions}>

{/* <Form.Item> */}
        <Button
          type="primary"
          htmlType="submit"
          onClick={pegasugestao }
        >
          Publicar
        </Button>
      {/* </Form.Item> */}

      <Collapse defaultActiveKey={["1","2","3"]}>

        <PanelStyled header="AMIGOS" key="1">

          <BoxCard>

            {amigos.map((v, i) => (
              <Card key={i} picture={v.picture } username={v.username} id={stringme(v.skills)} />
            ))}

          </BoxCard>

        </PanelStyled>



        <PanelStyled header="SUGESTÃO DE AMIZADE" key="2">
          <BoxCard>
          {sugested_friendship.map((v, i) => (
              <Card key={i} picture={v.picture } username={v.username} id={stringme(v.skills)} />
            ))}
          </BoxCard>
        </PanelStyled>

        <PanelStyled header="TODOS OS USUÁRIOS" key="3">
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
