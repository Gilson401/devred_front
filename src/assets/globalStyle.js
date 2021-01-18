import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

.ant-layout-header {
    background-image: linear-gradient(black, grey); /* ESTILO ADICIONADO */
}

.minhaClasse{
    /* background-color: rgba(249, 249, 249, 0.1); */
    height: 50px  ;
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
    margin-top :10px;
}



.ant-collapse-header {
    background-image: linear-gradient(black, grey);
}

.ant-menu-item-group-list{
    position: absolute;
  left: 110px;
  top: 0px;
}

.ant-menu-vertical{
    background-image: linear-gradient(black, grey);
    border:none;
    padding-right:-12px;
}


.ant-menu-submenu-title{
    padding-right: 0px !important;
}

.ant-menu-item-group-title{
    padding:0px;
    position: absolute;
  left: 110px;
  top: 0px;
}

.ant-menu-inline-collapsed-noicon{
min-width:100px;
color:white;
}

.ant-menu-item-only-child {
    background-image: linear-gradient(black, grey);
    margin  : 0px !important;
    /* padding-top : 5px !important; */
    /* height:50px !important; */
    color:white;
    a{
    color:white;
    }
}

.ant-menu-item a::before {
    color:white;
    
    a{
        color:white;
    }
}

.ant-menu-submenu-arrow{
    display:none;
}

.ant-menu {
    background: linear-gradient(black, grey );
    
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

`

export default GlobalStyle;


