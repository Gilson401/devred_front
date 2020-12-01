import LayoutBase from "../components/layout";
import { Collapse } from "antd";
import styled from "styled-components";
import Card from "../components/Networking/card";

const { Panel } = Collapse;
const BreadCrumb = ["Home", "Minha Rede"];

const Networking = () => {
  const Actions = "";

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Minha Rede" actions={Actions}>
      <Collapse defaultActiveKey={["1"]}>
        <PanelStyled header="AMIGOS" key="1">
          <BoxCard>
            {[...Array(10).keys()].map((v, i) => (
              <Card key={i} />
            ))}
          </BoxCard>
        </PanelStyled>
        <PanelStyled header="SUGESTÃO DE AMIZADE" key="2">
          <BoxCard>
            {[...Array(10).keys()].map((v, i) => (
              <Card key={i} />
            ))}
          </BoxCard>
        </PanelStyled>
      </Collapse>
    </LayoutBase>
  );
};

export default Networking;

const BoxCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 290px));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  max-height: 700px;
  overflow-y: auto;
`;
const PanelStyled = styled(Panel)`
  .ant-collapse-header {
    background-color: #001529;
    color: #fff !important;
    margin: 10px auto;
  }
`;
