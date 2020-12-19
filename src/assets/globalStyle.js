import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

.ant-layout-header {
    background-image: linear-gradient(black, grey); /* ESTILO ADICIONADO */
}

.minhaClasse{
    /* background-color: rgba(249, 249, 249, 0.1); */
    height: 50px  ;
    width: 50px;
}

.ant-collapse-header {
    background-image: linear-gradient(black, grey);
}

.ant-menu-item a::before {
    color:white;
    a{
        color:white;
    }
}

.ant-menu-dark.ant-menu-horizontal > .ant-menu-item, .ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu {
    top: 0;
    margin-top: 0;
    padding: 0 20px;
    border: black solid 1px;
    background-image: linear-gradient(grey, black);
    color:white;
    a{
        color:white;
    }
}
}

`;

export default GlobalStyle;


