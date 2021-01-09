import { Button } from "antd";
import LayoutBase from "../components/layout";
import styled from "styled-components";
import { ImProfile } from "react-icons/im";
import { FaUserAlt, FaGraduationCap, FaBlackTie } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { TiPointOfInterest } from "react-icons/ti";


import CollapseOptions from "../components/panel/collapse_options";
import FormEducation from "../components/panel/form.education";
import FormSkill from "../components/panel/form.skill";
import FormProfile from "../components/panel/form.profile";
import { useEffect, useState } from "react";
import { getProfile } from "../store/User/user.action";
import { useDispatch, useSelector } from "react-redux";
import FormInterest from "../components/panel/form.interest";

const BreadCrumb = ["Home", "Painel"];

const PanelAdmin = () => {
  const Actions = "";
  const [viewPanel, setViewPanel] = useState(1);
  const dispatch = useDispatch();

  /**Faz setViewPanel(view) */
  const changeViewPanel = (view) => {
    setViewPanel(view);
  };

  useEffect(() => {
    dispatch(getProfile())
}, [dispatch])

   const username = useSelector(state => state.user.profile.username)

   /**Retorna o componente que será exibido abaixo dos botões do Painel do usuário conforme valor do state viewPanel */
  const ViewPanel = () => {
    switch (viewPanel) {
      case 0:
        return <CollapseOptions />;
      case 1:
        return <FormProfile />;
      case 2:
        return <FormEducation changeViewPanel={changeViewPanel} />;
      case 3:
        return <FormSkill/>
        case 4:
            return <FormInterest/>
      default:
        return <CollapseOptions />;
    }
  };

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Painel" actions={Actions}>
      <Info onmouse>
        <FaUserAlt /> Bem vindo, <strong> {username}</strong>
        <br />
        <Button size="medium" onClick={() => changeViewPanel(0)}>
          <MdDashboard /> DashBoard
        </Button>
        <Button size="medium" onClick={() => changeViewPanel(1)}>
          <ImProfile /> Dados Básicos
        </Button>
        <Button size="medium" onClick={() => changeViewPanel(2)}>
          <FaGraduationCap /> Adicionar Educação
        </Button>
       
        <Button size="medium" onClick={() => changeViewPanel(3)}>
          <GiSkills /> Adicionar Skill
        </Button> 

        <Button size="medium" onClick={() => changeViewPanel(4)}>
          <TiPointOfInterest /> Adicionar Interesses
        </Button> 

      </Info>
      {ViewPanel()}
    </LayoutBase>
  );
};

export default PanelAdmin;

const Info = styled.div`
  background: #eee;
  padding: 20px;
  button {
    margin: 10px 5px;
    border-radius: 4px;
    :hover {
      background: #1890ff;
    }
    svg {
      position: relative;
      margin-bottom: -2px;
      margin-right: 5px;
    }
  }
`;
