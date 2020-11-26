import { Spin } from "antd";
import styled from "styled-components";

const Loading = () => (
  <>
    <SpinStyled size="large" />
  </>
);

export default Loading;

const SpinStyled = styled(Spin)`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
