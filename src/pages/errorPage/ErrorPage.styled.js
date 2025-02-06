import styled from "styled-components";

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

export const ErrorSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Imagediv = styled.div`
  text-align: center;
  width: 20%;
  margin-bottom: 1rem;
  img {
    width: 100%;
    box-shadow: 0px 0px 15px 4px #61a906;
    border-radius: 50%;
  }
`;

export const ErrorText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  h1 {
    font-size: 2.3rem;
    color: #fb0909;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1rem;
    color: #b3b3b3;
  }
`;
