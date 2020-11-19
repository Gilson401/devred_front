
import { Layout, Menu } from "antd";
import styled from "styled-components";
const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <Header>
        <Logo />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <ContentStyled>
        <div className="site-layout-content">Content</div>
      </ContentStyled>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;

const ContentStyled = styled(Content)`
  padding: 0 50px;
`;

const Logo = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
`;
