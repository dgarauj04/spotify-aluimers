import {
  PerfilText,
  PerfilSection,
  Figura,
  LinksNav,
  LinkButton,
  AreaPerfil,
  BackButton,
} from "./Profile.styled";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Perfil() {
  return (
    <>
      <AreaPerfil>
        <BackButton>
          <StyledLink to="/">
            <span>
              <GoHomeFill />
            </span>
          </StyledLink>
        </BackButton>

        <PerfilText>
          <p>
            Este projeto foi desenvolvido como parte da Imersão Alura,
            representando a construção da página inicial do Spotify. Embora não
            possua todas as funcionalidades do aplicativo original, ele ilustra
            a estrutura e o design da interface principal.
          </p>
          <p>
            Agradeço por dedicar seu tempo para conferir este projeto. E não se
            preocupe, em breve irei criar meu próprio app de música e irei
            compartilhar com vocês. Fique de olho!
          </p>
        </PerfilText>

        <PerfilSection>
          <Figura>
            <img src="https://github.com/dgarauj04.png" alt="minha imagem" />
          </Figura>
          <LinksNav>
            <LinkButton
              href="https://instagram.com/dgaraujoo_"
              target="_blank"
              className="insta"
            >
              <FaInstagram />
              Instagram
            </LinkButton>
            <LinkButton
              href="https://linkedin.com/in/douglas-araujo-dgprogdev"
              target="_blank"
              className="linke"
            >
              <FaLinkedin />
              Linkedin
            </LinkButton>
            <LinkButton
              href="https://github.com/dgarauj04"
              target="_blank"
              className="githu"
            >
              {" "}
              <FaGithub />
              Github
            </LinkButton>
          </LinksNav>
        </PerfilSection>
      </AreaPerfil>
    </>
  );
}

export default Perfil;
