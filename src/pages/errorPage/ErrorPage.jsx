import {
  BackButton,
  ErrorSection,
  Imagediv,
  ErrorText,
} from "./ErrorPage.styled";
import iconespotify from "../../assets/icons/favicon.png";
import { GoHomeFill } from "react-icons/go";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function ErrorPage() {
  return (
    <>
      <BackButton>
        <StyledLink to="/">
          <span>
            <GoHomeFill />
          </span>
        </StyledLink>
      </BackButton>

      <ErrorSection>
        <Imagediv>
          <img src={iconespotify} />
        </Imagediv>
        <ErrorText>
          <h1>!!ERROR!!</h1>
          <h2>PÁGINA NÃO ENCONTRADA</h2>
          <h2>RETORNE A PÁGINA INICIAL!!</h2>
        </ErrorText>
      </ErrorSection>
    </>
  );
}
