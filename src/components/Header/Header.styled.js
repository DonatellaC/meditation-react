import styled from "styled-components";

export const TitleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 40px 0;
  color: ${(props) => props.color};
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 3rem;
`;

export const SubTitle = styled.h2`
  margin: 20px;
  font-size: 22px;
  font-weight: 400;
`;
