import { Collapse } from "antd";
import styled from "styled-components";

import TableEducation from "./table.education";
const { Panel } = Collapse;

const CollapseOptions = () => (
  <Collapse defaultActiveKey={["1"]} ghost>

    <PanelStyled header="Educação" key="1">
      <TableEducation />
    </PanelStyled>

    {/* <PanelStyled header="Experiência Profissional" key="2">
      <TableExperience />
    </PanelStyled> */}
    
  </Collapse>
);

export default CollapseOptions;

const PanelStyled = styled(Panel)`
  .ant-collapse-header {
    background-color: #001529;
    color: #fff !important;
    margin: 10px auto;
  }
`;
