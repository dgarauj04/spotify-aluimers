import styled from "styled-components";
import { Link } from "react-router-dom";
import { AreaNavigation, ItemNavigation } from "./ItemsNavigation.styled";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function ItemsNavigation() {
  return (
    <>
      <AreaNavigation>
        <li>
          <StyledLink to="/">
            <ItemNavigation>
              <span>
                <GoHomeFill />
              </span>
              <span>Início</span>
            </ItemNavigation>
          </StyledLink>
        </li>

        <li>
          <StyledLink href="#search-input">
            <ItemNavigation>
              <span>
                <IoSearch />
              </span>
              <span>Buscar</span>
            </ItemNavigation>
          </StyledLink>
        </li>
      </AreaNavigation>
    </>
  );
}
