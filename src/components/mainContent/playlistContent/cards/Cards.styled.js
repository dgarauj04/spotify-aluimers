import styled, { css } from "styled-components";

export const OfferScrollContainer = styled.div`
  max-height: 43vh;
  margin: 24px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const OfferListItem = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 22px;
  margin-bottom: 16px;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    height: auto;
    width: 107px;
    transform: rotate(25deg) translate(18%, -2%);
  }

  ${css`
    @media screen and (max-width: 1015px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 32px;
      margin: 0 auto;
    }
  `}
`;

export const Postcards = styled.a`
  position: relative;
  width: 220px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  text-decoration: none;
`;

export const CardSpan = styled.span`
  padding: 16px;
  position: absolute;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;
