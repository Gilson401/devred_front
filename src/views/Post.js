import LayoutBase from "../components/layout";

const BreadCrumb = ["Home", "Post"];

const Post = () => {
  return (
    <LayoutBase breadcrumb={BreadCrumb}>
      <h1>teste</h1>
    </LayoutBase>
  );
};

export default Post;
