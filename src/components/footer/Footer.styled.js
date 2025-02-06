import styled from "styled-components";

export const ContainerFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to right, #ae2896, #509bf5);
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  flex-shrink: 0;
  margin-top: 7px;
`;

export const PremiumTitle = styled.p`
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const PremiumSubtitle = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
`;

export const PremiumButton = styled.button`
  background-color: #ffffff;
  padding: 14px 20px;
  border: 0px;
  border-radius: 40px;
  cursor: pointer;
  flex-shrink: 0;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;
