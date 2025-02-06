import styled from 'styled-components';

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin: 10px;
  border-radius: 8px;
  background-color: #121212;
  padding: 12px;
  margin-left: 330px;
  margin-top: 15px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #131313;
  background-color: rgba(0, 0, 0, 7);
  border-radius: 50%;
  border: none;
  cursor: pointer;

  /* Estilos específicos para ArrowLeft */
  &.left {
    margin-right: 1.25rem;
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  width: 364px;
  height: 48px;
  margin-left: 8px;
  background-color: #242424;
  border-radius: 500px;
  border: 1px solid transparent;

  img {
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
`;
export const HeaderLogin = styled.div`
  display: flex;
  align-items: center;
`;

export const AreaInput = styled.input`
  background: transparent;
  border: none;
  padding: 0px 100px 0 12px;
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  outline: none;
  max-lenght: 800px;
  text-transform: lowercase;
`;

export const Subscribe = styled.button`
  color: #a7a7a7;
  font-size: 16px;
  font-weight: 700;
  background-color: transparent;
  margin-right: 32px;
`;

export const Login = styled.button`
  width: 100px;
  height: 48px;
  color: #000;
  background-color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 40px;
`;
