import React from "react";

import { TitleHeader, SubTitle, Title } from "./Header.styled";

function Header({ title, subTitle, color }) {
  return (
    <>
      <TitleHeader color={color}>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitleHeader>
    </>
  );
}

export default Header;
