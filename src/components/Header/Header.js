import React from "react";

import { TitleHeader, SubTitle, Title } from "./Header.styled";

function Header({ title, subTitle }) {
  return (
    <>
      <TitleHeader>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitleHeader>
    </>
  );
}

export default Header;
