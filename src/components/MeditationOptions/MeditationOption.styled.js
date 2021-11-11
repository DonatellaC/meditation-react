import styled from "styled-components";

export const ImgOptions = styled.img`
  color: white;
  width: 30px;
  margin-right: 15px;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  height: 750px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  background-color: #905279;
  padding: 30px 20px;
  border-radius: 10px;
  margin: 15px;
  min-width: 230px;
  max-height: 80px;
  cursor: pointer;
`;

export const Text = styled.div`
  h6 {
    color: white;
    font-size: 16px;
    margin: 0 0 8px;
    font-weight: 400;
  }

  p {
    color: #d2d4de;
    font-size: 13px;
    margin: 0;
  }
`;
