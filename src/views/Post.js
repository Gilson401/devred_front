import React, { useEffect, useState } from "react";
import LayoutBase from "../components/layout";
import PostItem from "../components/post/item";
import Loading from "../components/loading/index";
import { useDispatch, useSelector } from "react-redux";
import { getPostAll } from "../store/Post/post.action";
import { Button } from "antd";
import styled from "styled-components";
const BreadCrumb = ["Home", "Post"];

const limitPerPage = 7;

const PostView = () => {
  const Actions = "";
  const [page, setPage] = useState(1);
  // Estado do redux -----------------------------------
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.post.loading);
  const postAll = useSelector((state) => state.post.all);
  const total = useSelector((state) => state.post.total);
  // -----------------------------------
  useEffect(() => {
    dispatch(getPostAll(page, limitPerPage));
  }, [dispatch, page]);

  const isFinalPage = () => {
    const totalPage = Math.ceil(total / limitPerPage);
    return page === totalPage;
    // return total % limitPerPage === 0;
  };

  const mountPosts = () => {
    if (postAll) {
      return postAll.map((post, i) => (
        <PostItem
          key={i}
          author={post.author}
          title={post.title}
          description={post.description}
          created_at={post.created_at}
        />
      ));
    }
    return;
  };

  const changePage = (page) => (page >= 1 ? setPage(page) : false);
  const Paginator = () => {
    return !loading && total > limitPerPage ? (
      <PaginatorStyled>
        <Button
          onClick={() => changePage(page - 1)}
          disabled={page === 1}
          type="primary"
        >
          Anterior
        </Button>
        <Button
          disabled={isFinalPage()}
          onClick={() => changePage(page + 1)}
          type="primary"
        >
          Próximo
        </Button>
      </PaginatorStyled>
    ) : (
      ""
    );
  };

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Postagens" actions={Actions}>
      {loading ? <Loading /> : mountPosts()}
      {Paginator()}
    </LayoutBase>
  );
};

export default PostView;

const PaginatorStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  button {
    margin: 5px;
  }
`;
