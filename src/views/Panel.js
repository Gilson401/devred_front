import { Button } from "antd";
import LayoutBase from "../components/layout";
import styled from "styled-components";
import { ImProfile } from "react-icons/im";
import { FaUserAlt, FaGraduationCap } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import CollapseOptions from "../components/panel/collapse_options";
import FormEducation from "../components/panel/form.education";
import FormExperience from "../components/panel/form.experience";
import FormProfile from "../components/panel/form.profile";
import { useEffect, useState } from "react";
import { getProfile } from "../store/User/user.action";
import { useDispatch, useSelector } from "react-redux";

const BreadCrumb = ["Home", "Painel"];

const PanelAdmin = () => {
  const Actions = "";
  const [viewPanel, setViewPanel] = useState(0);
  const dispatch = useDispatch();

  const changeViewPanel = (view) => {
    setViewPanel(view);
  };

  useEffect(() => {
    dispatch(getProfile())
}, [dispatch])

  const ViewPanel = () => {
    switch (viewPanel) {
      case 0:
        return <CollapseOptions />;
      case 1:
        return <FormProfile />;
      case 2:
        return <FormEducation changeViewPanel={changeViewPanel} />;
      case 3:
        return <FormExperience/>
      default:
        return <CollapseOptions />;
    }
  };

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Minha Rede" actions={Actions}>
      <Info>
        <FaUserAlt /> Bem vindo, <strong> Liniker Silva</strong>
        <br />
        <Button size="medium" onClick={() => changeViewPanel(0)}>
          <MdDashboard /> DashBoard
        </Button>
        <Button size="medium" onClick={() => changeViewPanel(1)}>
          <ImProfile /> Editar Perfil
        </Button>
        <Button size="medium" onClick={() => changeViewPanel(2)}>
          <FaGraduationCap /> Adicionar Educação
        </Button>
        {/* <Button size="medium" onClick={() => changeViewPanel(3)}>
          <FaBlackTie /> Adicionar Experiência
        </Button> */}
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
