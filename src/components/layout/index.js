import { Layout, Menu } from "antd";
import styled from "styled-components";
import { FiPower } from "react-icons/fi";
import { IoIosGitNetwork } from "react-icons/io";
import { RiProfileLine } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
import { GoChevronRight } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import history from "../../config/history";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/User/user.action";
import { useEffect, useState } from "react";
import { removeToken } from "../../config/auth";
import coders from '../../assets/img/coders_logo.png'
import { CaretDownFilled , MenuOutlined} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const MenuList = [
    { order: "1", link: "/", title: "Postagens", icon: <BiComment /> },
    {
        order: "2",
        link: "/minharede",
        title: "Minha Rede",
        icon: <IoIosGitNetwork />,
    },
    { order: "3", link: "/painel", title: "Painel", icon: <RiProfileLine /> },
    { order: "4", link: "/perfil", title: "Perfil", icon: <CgProfile /> },
];


const LayoutBase = ({ children, breadcrumb, actions, title = "" }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])

    /**Removetoken e vai pra tela de login */
    const logout = () => {
        removeToken()
        history.push('/signin')
    }

    const UserProfile = useSelector((state) => state.user.profile) || [{ title: "" }]
    const getCurrent = MenuList.filter((m) => m.link === history.location.pathname);

    const userpicture = UserProfile.picture

    const handleClick = e => {

        // setCollapsed(!collapsed)
        // console.log('click ', e, collapsed);
    };

    // const [collapsed, setCollapsed] = useState(true)
    const menuVertical = (
        <>
            <Menu className="hidelarge"
                onClick={handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['0']}
                // defaultOpenKeys={['sub1']}
                mode="vertical"

                // inlineCollapsed={collapsed}
            >
                <SubMenu icon={<CaretDownFilledst />} key="sub1" title="">
                    <Menu.ItemGroup key="g1" title="Nav">
                        {MenuList.map((m) => (
                            <Menu.Item key={m.order}>
                                <Link to={m.link}>
                                    {m.icon} {m.title}
                                </Link>
                            </Menu.Item>
                        ))}
                        <Menu.Item className="ant-menu-item-only-child"  onClick={logout} key={4}>
                            <FiPower /> Sair
                </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>

        </>
    )


    const menuHorizontal = (
        <>
            <MenuStyledV className="hidesmall"
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                selectedKeys={[getCurrent[0].order]}
            >
                {MenuList.map((m) => (
                    <Menu.Item key={m.order}>
                        <Link to={m.link}>
                            {m.icon} {m.title}
                        </Link>
                    </Menu.Item>
                ))}
                <Menu.Item  onClick={logout} key={10}>
                    <FiPower /> Sair
                </Menu.Item>

            </MenuStyledV>

        </>
    )




    return (
        <Layout className="layout">
            <HeaderStyled>

                <Logo >
                    <img src={userpicture || coders} className="minhaClasse" alt="texto alt" />
                    <div className="hidesmall">
                        {`   `} Coders
                    </div>
                </Logo>

                {menuVertical}

                {/* ..COMEÇA O MENU DE NAV */}

            
                 {menuHorizontal}

                {/* ..COMEÇA O MENU DE NAV */}


            </HeaderStyled>

            <ContentStyled>
                <BreadcrumbStyled>
                    {breadcrumb.map((b, i) => (
                        <Breadcrumb.Item key={i}>{b}</Breadcrumb.Item>
                    ))}
                </BreadcrumbStyled>
                <div className="site-layout-content">
                    <TopBar>
                        <Title>
                            <GoChevronRight /> {title}
                        </Title>
                        <Actions>{actions}</Actions>
                    </TopBar>
                    {children}
                </div>
            </ContentStyled>
            <Footer style={{ textAlign: "center" }}>
                Todos os Direitos Reservados Coders | 2021
                <p>Site desenvolvido por <a href='https://gilsonpaulo.com.br/'> GPWEB</a> </p>
            </Footer>
        </Layout>
    );
};

export default LayoutBase;

// styles ----------------------------------------------------

const CaretDownFilledst = styled(MenuOutlined)`
svg {
    position: relative;
    margin-bottom: -5px;
    color:white;
    transform:scale(2.0);
  -webkit-transform:scale(2.0);
  }
`

const BreadcrumbStyled = styled(Breadcrumb)`
  margin: 16px 0;
`;

const HeaderStyled = styled(Header)`
  display: flex;
  
  .hidesmall { display: flex;  }
  .hidelarge {display : none;
    justify-content :space-between;
  ; }
 
  @media screen and (max-width: 800px) {
        .hidesmall { display: none; } 
        .hidelarge {display : flex;
            justify-content: flex-end; }        
     }

`;

const ContentStyled = styled(Content)`
  margin: auto 20px;
  .site-layout-content {
    background: #fff;
    padding: 5px;
    min-height: 80vh;
  }
`;

const Logo = styled.div`
  height: 31px;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  font-family: "Goldman", cursive;
  display : flex;
  flex: 1;
  svg {
    position: relative;
    margin-bottom: -5px;
  }

  
  @media screen and (max-width: 850px) {
        .hidesmall { display: none;  } 
        .hidelarge {display : flex; 
                   
                    /* background-color : rgb(255, 255, 255); */
                   }        
     }

`;



const MenuStyledV = styled(Menu)`
  display: block;
  height: 100%;
  justify-content: flex-end;
  
  svg {
    position: relative;
    margin-bottom: -2px;
  }
`;

const TopBar = styled.div`
  display: flex;
  background: #eee5;
  padding: 10px;
`;

const Title = styled.div`
  color: #43949e;
  font-size: 28px;
  font-weight: 500;
  border-bottom: thin solid #eee2;
  flex: 1;
  svg {
    position: relative;
    margin-bottom: -5px;
  }
`;
const Actions = styled.div`
  justify-self: flex-end;
`;
