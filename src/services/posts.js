import http from "../config/http";


/**Carrega os posts coonforme query. Query é o array de topics de interesse do user */
const getPostsService = async (query, solicitante) => {
    console.log("QUERY", query, solicitante)

    return await http.get(`/posts`, { params: query });
};

const getCountPostsService = async (page = 1) => {
    const { data } = await http.get(`/posts`);
    return data.length;
};


/**Rota post ainda não foi subida */
const createPostService = (data) => {
    return http.post(`/posts`, data);
};




/**Manda like para um post */
const likeInPost = (post) => http.post(`/like/${post}`);


/**Manda dislike para um post */
const dislikeInPost = (post) => http.post(`/dislike/${post}`);



/**Manda like para um post */
const remove_likeInPost = (post) => http.delete(`/like/${post}`);


/**Manda dislike para um post */
const remove_dislikeInPost = (post) =>
    http.delete(`/dislike/${post}`);

export { remove_likeInPost, remove_dislikeInPost, likeInPost, dislikeInPost, getPostsService, getCountPostsService, createPostService };
