import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  position: relative;
`;

export const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgCard = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  cursor: pointer;
`;

export const TextCard = styled.p`
  color: #fff;
  font-size: 25px;
  line-height: 20px;
  font-weight: bold;
  margin: 10px 0;
  cursor: pointer;
`;

export const ContainerContent = styled.div`
  position: absolute;
`;

export const ContainerMusic = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;
