import {
  ContainerFooter,
  Text,
  PremiumTitle,
  PremiumSubtitle,
  PremiumButton,
} from "./Footer.styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function Footer() {
  return (
    <>
      <ContainerFooter>
        <Text>
          <PremiumTitle>Testar o Premium de graça</PremiumTitle>
          <PremiumSubtitle>
            Inscreva-se para curtir música ilimitada e podcasts só com alguns
            anúncios. Não precisa de cartão de crédito.
          </PremiumSubtitle>
        </Text>
        <StyledLink to="/profile">
          <PremiumButton>Inscreva-se grátis</PremiumButton>
        </StyledLink>
      </ContainerFooter>
    </>
  );
}
