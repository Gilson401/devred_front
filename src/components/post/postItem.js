import React, { createElement, useEffect, useState } from 'react';
import { Comment } from "antd";
import styled from "styled-components";
import AvatarNeutro from "../../assets/img/avatar.png";
import {Modal } from "antd";
import { toastr } from "react-redux-toastr";
import { FormPost } from "./formPost";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { actionCreateComment } from '../../store/Comments/comments.action';
import { dislikeInPost, likeInPost, remove_likeInPost, remove_dislikeInPost } from '../../services/posts';
import { reloaderAction } from '../../store/Reloader/reloader.action';
import moment from 'moment'

/**props: author,
  title,
  description,
  created_at,
  avatar
  children deve receber um array de posts
  canComment limita a cadeia de comments  */
const PostItem = ({
    author,
    title,
    description,
    created_at,
    avatar = AvatarNeutro,
    id,
    count_dislikes,
    count_likes,
    canComment = true,
    children = [""]
}) => {
    const dispatch = useDispatch();
    const [likes, setLikes] = useState(count_likes);
    const [dislikes, setDislikes] = useState(count_dislikes);
    const [action, setAction] = useState(null);
    const [showModal, setShowModal] = useState(false);
    /**Fecha o modal */
    const closeModalForm = () => setShowModal(false);
    const [update, setUpdate] = useState(false);




    const like = async () => {
        await likeInPost(id)
        await remove_dislikeInPost(id)
        setAction('liked');
        dispatch(reloaderAction())
    };
    const dislike = async () => {
        await dislikeInPost(id)
        await remove_likeInPost(id)
        setAction('disliked');
        dispatch(reloaderAction())
    };




    useEffect(() => {
        if (update) {
            setUpdate(false);
        }
    }, [dispatch, update]);

    /**Aqui estou dentro de um POST. 
     * Logo aqui é uma resposta de um post, ou seja um comment */
    const submitComment = (event, data) => {
        event.preventDefault();

        if (postVerificador(data)) {
            dispatch(actionCreateComment(data))
            closeModalForm();
            setUpdate(true);
            dispatch(reloaderAction())
        } else {
            openNotification("Preencher campos")
        }

    };


    const postVerificador = (data) => {
        if (!data.content) {
            return false
        }

        //Se não tem post é post novo e deve ter tópico e título
        if (!data.post) {
            if (!data.topic || !data.title) {
                return false
            }
        }
        return true
    }


    const openNotification = (msg) => {
        toastr.info(msg);
    };


    /** É um encapsulador de forms.  Chama createComment  */
    const ModalForm = () => (
        <Modal
            title={`Responder post. ${id}`}
            visible={showModal}
            footer={false}
            onCancel={closeModalForm}
        >
            <FormPost
                post={id}  //COmo é um reply faz referencia a um id de post existente
                //Não exibe título e não exibe select de topic/
                submit={submitComment}
            />

        </Modal>
    );


    return (
        <>
            <ModalForm />
            <Post
                author={author}
                avatar={<img src={avatar} alt={'foto'} />}
                content={
                    <React.Fragment>
                        <div>
                            <h4>{title || ""}</h4>
                            <p>{description}</p>
                        </div>
                    </React.Fragment>
                }
                datetime={created_at ? moment(created_at).format('DD/MM/YYYY, h:mm:ss a') : ""}
                children={children}
                actions={[

                    <StyledTooltip visible={canComment} key="comment-basic-like" title="Like">
                        <span onClick={like}>
                            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                            <span className="comment-action">{likes}</span>
                        </span>
                    </StyledTooltip>,
                    <StyledTooltip visible={canComment} key="comment-basic-dislike" title="Dislike">
                        <span onClick={dislike}>
                            {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                            <span className="comment-action">{dislikes}</span>
                        </span>
                    </StyledTooltip>,

                    <StyledSpan visible={canComment} onClick={() => setShowModal(true)} key="comment-basic-reply-to">Reply to</StyledSpan>

                ]}

            />


        </>

    );
};

export default PostItem;

const StyledSpan = styled.span`
display: ${props => props.visible ? "block" : "none"}
`

const StyledTooltip = styled.span`
display: ${props => props.visible ? "block" : "none"}
`


const Post = styled(Comment)`
  background-image: linear-gradient(180deg, #fff, #eee);
  border: thin solid #eee;
  margin-bottom: 10px;
  .ant-comment-avatar img {
    width: 80px;
    height: 80px;
    margin: 10px;
  }
`;
