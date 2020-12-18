import React, { createElement, useEffect, useState } from 'react';
import { Comment } from "antd";
import styled from "styled-components";
import AvatarNeutro from "../../assets/img/avatar.png";
import { Tooltip } from "antd";
import { Button, Modal } from "antd";
import { toastr } from "react-redux-toastr";
import {FormPost} from "../../components/post/form";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createPost, getPostAll } from '../../store/Post/post.action';
import { actionCreateComment } from '../../store/Comments/comments.action';
import { dislikeInPost, likeInPost, remove_likeInPost, remove_dislikeInPost } from '../../services/posts';

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
    const [likes, setLikes] = useState(count_likes );
    const [dislikes, setDislikes] = useState(count_dislikes);
    const [action, setAction] = useState(null);
    const [showModal, setShowModal] = useState(false);
    /**Fecha o modal */
    const closeModalForm = () => setShowModal(false);
    const [update, setUpdate] = useState(false);

    const like = async () => {
        await likeInPost(id)
        await  remove_dislikeInPost(id)
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };
    const dislike = async () => {
        await  dislikeInPost(id)
        await remove_likeInPost(id)
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    useEffect(() => {
        // dispatch(getPostAll());
        if (update) {
            setUpdate(false);
        }
    }, [dispatch, update]);

    /**Aqui estou dentro de um POST. 
     * Logo aqui é uma resposta de um post, ou seja um comment */
    const submitComment = (event, data) => {
        event.preventDefault();

        openNotification("//TODO: Post de comentário")
        dispatch(actionCreateComment(data))
        closeModalForm();
        setUpdate(true);
    };



    const openNotification = (msg) => {
        toastr.info(msg);
    };


    /** É um encapsulador de forms.  Chama createComment  */
    const ModalForm = () => (
        <Modal
            title= {`Responder post. ${id}`}
            visible={showModal}
            footer={false}
            onCancel={closeModalForm}
        >
            <FormPost post={id} submit={submitComment} />
        </Modal>
    );


    return (
        <>
            <ModalForm />
            <Post
                author={author}
                avatar={<img src={avatar} alt={title} />}
                content={
                    <React.Fragment>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </React.Fragment>
                }
                datetime={created_at}
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
display: ${props=> props.visible ? "block" : "none"}
`

const StyledTooltip = styled.span`
display: ${props=> props.visible ? "block" : "none"}
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
