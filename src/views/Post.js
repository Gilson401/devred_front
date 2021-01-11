import React, { useEffect, useState } from "react";
import LayoutBase from "../components/layout";
import PostItem from "../components/post/postItem";
import Loading from "../components/loading/index";
import { FormPost } from "../components/post/formPost";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPostAll } from "../store/Post/post.action";
import { Button, Modal } from "antd";

import { toastr } from "react-redux-toastr";


/**View de post (lista de posts e modal de cadastro de post) */
const PostView = () => {

    const BreadCrumb = ["Home", "Post"];

    const Actions = <Button onClick={() => setModal(true)}>Novo</Button>;
    const [modal, setModal] = useState(false);
    const [update, setUpdate] = useState(false);
    // Estado do redux -----------------------------------
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.post.loading);
    const postAll = useSelector((state) => state.post.all);
    // -----------------------------------

    const reloader = useSelector(state => state.reloader.loading)

    useEffect(() => {
        dispatch(getPostAll());
        if (update) {
            setUpdate(false);
        }
    }, [dispatch, update, reloader]);

    // const isFinalPage = () => {
    //   const totalPage = Math.ceil(total / limitPerPage);
    //   return page === totalPage;
    //   // return total % limitPerPage === 0;
    // };

    const mountPosts = () => {



        if (postAll) {
            return postAll.map((post, i) => (

                <PostItem
                    key={i}
                    avatar={post.author.picture}
                    author={post.author.username}
                    title={post.title}
                    description={post.content}
                    created_at={post.createdAt}
                    children={mountPosts2(post.comments)}
                    id={post._id}
                    count_likes={post.count_likes}
                    count_dislikes={post.count_dislikes}
                />
            ));
        }
        return;
    };



    /**Criei este para colocar os comentários */
    const mountPosts2 = (postAll) => {
        if (postAll) {
            return postAll.map((post, i) => (

                <PostItem
                    key={i}
                    avatar={post.author.picture}
                    author={post.author.username}
                    title={post.title}
                    description={post.content}
                    created_at={post.created_at}
                    children={post.comments || ""}
                    id={post._id}
                    canComment={false}
                />

            ));
        }
        return;
    };


    const handleCancel = () => setModal(false);

    /** */
    const submitPost = (event, data) => {
        debugger

        event.preventDefault();

        if (postVerificador(data)) {
            dispatch(createPost(data));
            handleCancel();
            setUpdate(true);
        } else {
            toastr.error("Completar campos");
            
        }
    };

    const postVerificador = (data) => {
        if (!data.content) {
            console.log("Não tem conteúdo")
            return false
        }

        //Se não tem post é tópico novo e deve ter ttópico e título
        if (!data.post) {
            if (!data.topic || !data.title) {
                console.log("É um post novo. Precisa ter topic e title")
                return false
            }
        }
        return true
    }



    const ModalForm = () => (
        <Modal
            title="Nova Postagem"
            visible={modal}
            footer={false}
            onCancel={handleCancel}
        >
            <FormPost
                showTitleInput={true} //mosta o input de title
                showTopics={true}     //mostra o select de topics
                submit={submitPost}     //função de submeter post
            />

        </Modal>
    );

    return (
        <LayoutBase breadcrumb={BreadCrumb} title="Postagens" actions={Actions}>
            <ModalForm />
            {loading ? <Loading /> : mountPosts()}
            {/* {Paginator()} */}
        </LayoutBase>
    );
};

export default PostView;
