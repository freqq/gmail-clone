import React from "react";

import Logo from "components/Logo";
import Search from "components/Search";

import { HeaderWrapper } from "components/Header/Header.styles";

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Search />
  </HeaderWrapper>
);

export default Header;
