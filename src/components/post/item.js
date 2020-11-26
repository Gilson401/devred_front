import React from "react";
import { Comment } from "antd";
import styled from "styled-components";
import AvatarNeutro from "../../assets/img/avatar.png";

const PostItem = ({
  author,
  title,
  description,
  created_at,
  avatar = AvatarNeutro,
}) => {
  return (
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
    />
  );
};

export default PostItem;

const Post = styled(Comment)`
  background-image: linear-gradient(360deg, #fff, #eee);
  border: thin solid #eee;
  margin-bottom: 10px;
  .ant-comment-avatar img {
    width: 80px;
    height: 80px;
    margin: 10px;
  }
`;
