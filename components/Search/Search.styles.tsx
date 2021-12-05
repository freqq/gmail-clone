import styled from "styled-components";
import Image from "next/image";

export const SearchWrapper = styled.div`
  position: relative;
  margin-left: 50px;
`;

export const SearchInput = styled.input`
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 14px;
  border: none;
  background-color: rgba(241, 243, 244, 255);
  outline: none;
  transition: 0.2s;
  width: 400px;
  height: 46px;
  box-sizing: border-box;

  ::placeholder {
    color: rgba(121, 122, 122, 255);
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: rgba(121, 122, 122, 255);
  }

  ::-ms-input-placeholder {
    color: rgba(121, 122, 122, 255);
  }

  &:focus {
    background: rgba(255, 255, 255, 255);
    color: silver;
    box-shadow: 0 1px 1px 0 rgba(65, 69, 73, 0.3),
      0 1px 3px 1px rgba(65, 69, 73, 0.15);
  }
`;

export const SearchIcon = styled(Image)`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 14px;
  left: 14px;
`;
