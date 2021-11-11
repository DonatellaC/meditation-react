import styled from "styled-components";
import landscape from "../../images/landscape.jpg";

export const LandscapeWelcome = styled.div`
  background: url(${landscape}) no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const ContentWelcome = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SubTitle = styled.h2`
  margin-top: 10px;
  color: white;
  font-size: 22px;
  font-weight: 400;
`;
