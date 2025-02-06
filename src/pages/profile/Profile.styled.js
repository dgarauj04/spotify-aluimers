import styled from 'styled-components';

export const BackButton = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 5px;
  margin: 1rem 0 0 1rem;

  span {
    font-size: 2rem;
    color: #b3b3b3;
    cursor: pointer;
  }
`;

export const AreaPerfil = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (min-width: 770px) {
    height: 100vh;
  }
`;

export const PerfilText = styled.div`
  padding: 12px 5px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
  width: 80%;
  gap: 10px;
  color: #ced5d2;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  @media (max-width: 510px) {
    margin-left: 3rem;
  }
`;

export const PerfilSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 510px) {
    margin-left: 2rem;
    padding: 0px 1rem;
  }
`;

export const Figura = styled.div`
  display: flex;
  text-align: center;
  border: 1px solid #0e7445;
  border-radius: 75%;
  width: 50%;
  box-shadow: 0px 0px 10px 5px #323131a6;

  img {
    width: 100%;
    border-radius: 75%;
  }
`;

export const LinksNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const LinkButton = styled.a`
  color: #d1cdc2;
  padding: 1rem;
  position: relative;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: 20rem;
  display: inline-flex;
  justify-content: center;
  gap: 10px;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, #444343, #3e0c4ed9);
    border-radius: 0.8rem;
    opacity: 1;
    transition: 0.3s linear;
    z-index: -1;
  }

  &:hover::before {
    opacity: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    opacity: 0;
    transition: 0.6s linear;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
  }

  &.insta::after {
    background-image: linear-gradient(
      44deg,
      #5e025e,
      #8f1664,
      #cf0c0c,
      #c9c904
    );
  }

  &.linke::after {
    background-image: linear-gradient(46deg, #092268f7, #065870, #4081b9);
  }

  &.githu::after {
    background-image: linear-gradient(46deg, #420546, #720e8b, #081c66);
  }
`;
