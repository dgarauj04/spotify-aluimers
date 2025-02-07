import React from "react";
import {
  HeaderNavigation,
  Navigation,
  ArrowButton,
  HeaderSearch,
  AreaInput,
  HeaderLogin,
  Subscribe,
  Login,
} from "./Header.styled";
import leftArrowIcon from "../../assets/icons/small-left.png";
import rightArrowIcon from "../../assets/icons/small-right.png";
import searchIcon from "../../assets/icons/search.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Header = ({ setSearchTerm }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <HeaderNavigation>
      <Navigation>
        <ArrowButton className="left">
          <img src={leftArrowIcon} alt="Voltar" />
        </ArrowButton>
        <ArrowButton>
          <img src={rightArrowIcon} alt="Avançar" />
        </ArrowButton>
      </Navigation>

      <HeaderSearch>
        <img src={searchIcon} alt="Buscar" />
        <AreaInput
          id="search-input"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="O que você quer ouvir?"
          onChange={handleInputChange}
        />
      </HeaderSearch>

      <HeaderLogin>
        <Subscribe>Inscreva-se</Subscribe>
        <StyledLink to="/profile">
          <Login>Entrar</Login>
        </StyledLink>
      </HeaderLogin>
    </HeaderNavigation>
  );
};

export default Header;
