import React, { useEffect, useState } from "react";
import LayoutBase from "../components/layout";
import PostItem from "../components/post/postItem";
import Loading from "../components/loading/index";
import { FormPost } from "../components/post/formPost";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPostAll } from "../store/Post/post.action";
import { Button, Modal } from "antd";

import { toastr } from "react-redux-toastr";
import { getProfile } from "../store/User/user.action";
import { getUser } from "../config/auth";
import { actionGetUserInterestTopic } from "../store/Interests/interests.action";


/**View de post (lista de posts e modal de cadastro de post) */
const PostView = () => {

    const [efcontrol, setEfcontrol] = useState(0);
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
    const UserProfile = useSelector((state) => state.user.profile) || [{ title: "" }]

    useEffect(  () => {
      
        dispatch(getProfile())  
        dispatch(actionGetUserInterestTopic())      
       if (update) {
            setUpdate(false);
        }
    }, [dispatch, update]); //dispatch, update, reloader

    useEffect( () => {
        console.log("post UF43 - efcontrol", efcontrol)
        if(UserProfile.topics_of_interest && efcontrol === 0 ){
            const topicss2 = { lista : UserProfile.topics_of_interest.map(item => item._id)}
            dispatch(getPostAll(topicss2, 'useefectPostjsL46', efcontrol)); 
            setEfcontrol(efcontrol+1)
         }

      }, [efcontrol, dispatch, UserProfile.topics_of_interest]);//


      useEffect( () => {
        console.log("post UF55 - efcontrol", efcontrol)

      }, [efcontrol]);//



const iLiked = (likesArray) =>  likesArray.some((item) => item === UserProfile._id)

const iDisLiked = (dislikesArray) => dislikesArray.some((item) => item === UserProfile._id)

const likeDislikeVerify = ( likesArray, dislikesArray ) => {

    if (iLiked(likesArray) ){
        return 'liked'
    }else if (iDisLiked(dislikesArray)){
        return 'disliked'
    }else{
        return null
    }
}

const mountPosts = () => {

        if (postAll) {
            return postAll.map((post, i) => (

                <PostItem
                    key={i}
                    avatar={post.author.picture}
                    author={post.author.username}
                    title= { ` ${post.title || ""} ${post.topic?.title || ""}`  }
                    description={post.content}
                    created_at={post.createdAt}
                    children={mountPosts2(post.comments)}
                    id={post._id}
                    count_likes={post.count_likes}
                    count_dislikes={post.count_dislikes} 
                    iLikedOrDisliked = {likeDislikeVerify( post.likes, post.dislikes  )}
                    // setEfcontrol = {tryreloadEvents}
                    efcontrol = {efcontrol}
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
       
        event.preventDefault();

        if (postVerificador(data)) {
            dispatch(createPost(data))
            tryreloadEvents()
            setUpdate(true);
        } else {
            toastr.error("Completar campos");
            
        }
    };

const tryreloadEvents = ()=>{
    const topicss2 = { lista : UserProfile.topics_of_interest.map(item => item._id)}
    dispatch(getPostAll(topicss2,  'submitPostjs L111'));
    setEfcontrol(0)
    handleCancel();
}


    /**avalia se os dados necessários para submeter um post estão preenchidos */
    const postVerificador = (data) => {
        if (!data.content) {
             return false
        }

        //Se não tem post é tópico novo e deve ter ttópico e título
        if (!data.post) {
            if (!data.topic || !data.title) {
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
            <p>$$$$$$$$$$$ {efcontrol}</p>
            {loading ? <Loading /> : mountPosts()}
            {/* {Paginator()} */}
        </LayoutBase>
    );
};

export default PostView;
