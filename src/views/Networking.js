import LayoutBase from "../components/layout";
import Card from "../components/Networking/card";
// import avatar from '../../src/assets/img/avatar.png'
import {  Collapse, Tooltip } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionGetFriendships, actionGetNotFriendships  } from '../store/Friendship/friendships.action'
import {actionGetAllUsers} from '../store/User/user.action'
import { useEffect } from "react";

const { Panel } = Collapse;
const BreadCrumb = ["Home", "Minha Rede"];

/**Componente que lista as amizades e sugestões de amizada */
const Networking = () => {

    const sugested_friendship = useSelector(state => state.friends.sugested_friendship)
    const amigos = useSelector(state => state.friends.friendship)
    const allUsers = useSelector(state => state.user.allUsers)

    //Ao que parece há uma lentidão no redux e como eu disparo uma ação passando dados 
    //dele preciso de ter um valor inicial a ser passado para esta ação
    const amigos_id = useSelector(state => state.user.profile.friendships) //|| ['5fdb7c61fdcc8291a4d41850']
    const userSkills = useSelector(state => state.user.profile.skills) //|| ["java"]



    const Actions = "";
    const reloader = useSelector(state => state.reloader.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionGetFriendships())
        dispatch(actionGetAllUsers())
      
    }, [reloader, dispatch])

    useEffect(() => {


        const data = {
            friends: "" || amigos_id,
            skills: userSkills
        }
    
       
            dispatch(actionGetNotFriendships(data))
       
    }, [amigos_id, reloader, dispatch, userSkills])

    const stringme = (arr) => {
        try {
            var myVar = arr.join(', ')
            return myVar
        } catch {
            return "Not informed"
        }
    }

    return (
        <LayoutBase breadcrumb={BreadCrumb} title="Minha Rede" actions={Actions}>


            <Collapse defaultActiveKey={["1", "2", "3"]}>

                <PanelStyled header="AMIGOS" key="1">

                    <BoxCard>

                        {amigos.map((v, i) => (
                            <Card key={i} picture={v.picture} username={v.username} id={v._id} skills={stringme(v.skills)} />
                        ))}

                    </BoxCard>

                </PanelStyled>


    
                
                <PanelStyled header= {
                <Tooltip placement="topLeft" title="Com pelo menos uma skill em comum e ainda não amigo.">
                <div> SUGESTÃO DE AMIZADE</div>
                </Tooltip>
                } key="2">
                    <BoxCard>

                        {
                            sugested_friendship.map((v, i) => (
                                <Card key={i} picture={v.picture} username={v.username} id={v._id} skills={stringme(v.skills)} />
                            ))                           
                        }
                    </BoxCard>
                </PanelStyled>



                <PanelStyled header="TODOS OS USUÁRIOS" key="3">
                    <BoxCard>

                        {allUsers.map((v, i) => (
                             <Card key={i} picture={v.picture} username={v.username} id={v._id} skills={stringme(v.skills)} />
                            
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
