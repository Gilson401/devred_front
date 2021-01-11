import { Tooltip, Card } from "antd";

import { toastr } from "react-redux-toastr";
import avatar from '../../../src/assets/img/avatar.png'
import {
    LikeOutlined,
    UserAddOutlined,
    HeartFilled, UserDeleteOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { addFriendship, actionDeleteFriendship, deleteFriendship } from "../../services/friendshpsService";
import { useDispatch, useSelector } from "react-redux";
import { reloaderAction } from '../../store/Reloader/reloader.action';
import { actionGetNotFriendships } from "../../store/Friendship/friendships.action";

// toastr.error("Cadastro de postagem feito com sucesso.");

const key = "updatable";
/**Card com fotos dos amigos e sugestões de amigos
 * props: cover(imagem), username, id
 */
const CardNetworking = (props) => {

    const openNotification = (msg) => {
        toastr.info(msg);
    };


    const amigos_id = useSelector(state => state.user.profile.friendships) //|| ['5fdb7c61fdcc8291a4d41850']
    const userSkills = useSelector(state => state.user.profile.skills)

    const dispatch = useDispatch()

    /**Adiciona uma amizade */
    const addFriendship_method = async (id) => {
        debugger
        const jae = amigos_id.some((e) => e === props.id)

        if (!id) {
            openNotification("Não tem id")
            return
        } else {

            await addFriendship({ id })
                .then((res) => {
                    toastr.success("Sucesso.", `${props.username} adicionado/a como amigo/a.`)

                    //O state dos amigos atuais demora um tempo até atualizar. Se chamar notfriends imediatamente não 
                    //considera o amigo que  acabou de adicionar. O Push abaixo resolve isso.
                    amigos_id.push(id)

                    const data = {
                        friends: "" || amigos_id,
                        skills: userSkills
                    }
                    dispatch(actionGetNotFriendships(data))
                })
                .catch((err) => toastr.error(`Erro na adição de amigo: ${err.message}`))
                .finally(() => dispatch(reloaderAction()))
        }
    }

    //import { reloaderAction } from '../../store/Reloader/reloader.action';
    //const dispatch = useDispatch()
    //dispatch(reloaderAction())

    /**Remove uma amizade */
    const removeFriendship_method = async (id) => {
        //debugger
        if (!id) {
            openNotification("Não tem id")
            return
        } else {
            /**TODO:*/
            await deleteFriendship(id)
                .then((res) => {
                    toastr.success("Sucesso.", `${props.username} removido/a como amigo/a.`)

                    //O state dos amigos atuais demora um tempo até atualizar. Se chamar notfriends imediatamente não 
                    //considera o amigo que  acabou de adicionar. O Push abaixo resolve isso.
                    //  amigos_id.pull(id)

                    const index = amigos_id.indexOf(id);
                    if (index > -1) {
                        amigos_id.splice(index, 1);
                    }

                    const data = {
                        friends: "" || amigos_id,
                        skills: userSkills
                    }
                    dispatch(actionGetNotFriendships(data))

                })
                .catch((err) => toastr.error(`Erro na remoção de amigo: ${err.message}`))
                .finally(() => dispatch(reloaderAction()))
        }
    }


    const none = () => {
        //style={{ display: `${amigos_id.some((e)=> e === props.id) ? "none" : "auto"}` }}
        return "auto" || amigos_id.some((e) => e === props.id) ? "none" : "auto"
    }

    return (
        <CardStyled
            cover={<img alt="example" src={props.picture || avatar} />}
            //   cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            actions={[

                <Tooltip placement="top" title= {amigos_id.some((e) => e === props.id) ? "Remover" : "Adicionar"}>
                    <HeartFilled
                        style={{ color: `${amigos_id.some((e) => e === props.id) ? "red" : "blue"}` }}
                        onClick={() => amigos_id.some((e) => e === props.id) ? removeFriendship_method(props.id) : addFriendship_method(props.id) } />
                </Tooltip>
            ]}
        >
            <Title size="18">{props.username}</Title>
            {/* TODO: confirmar o campo que vai puxar abaixo 
      em tese seia o "cargo do usuário" mas este campoi não existe no schema*/}
            <Title size="12">{props.skills}</Title>
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
