import React, { useState } from "react";

import searchIcon from "assets/search.svg";

import {
  SearchWrapper,
  SearchInput,
  SearchIcon,
} from "components/Search/Search.styles";

const Search = () => {
  const [text, setText] = useState("");

  return (
    <SearchWrapper>
      <SearchIcon src={searchIcon} alt="search" />
      <SearchInput
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Search mail"
      />
    </SearchWrapper>
  );
};

export default Search;
