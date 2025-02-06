import styled from "styled-components";

export const LibraryContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LibraryButton = styled.button`
  display: flex;
  margin-right: 10px;
  color: #b3b3b3;
  background-color: transparent;
  border: 0px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  padding: 20px 10px;
`;

export const SpanIcon = styled.span`
  font-size: 20px;
  font-weight: 300;
  color: #b3b3b3;
  margin-right: 10px;
  padding-right: 8px;
  &.fa-plus {
    margin: 24px 10px;
  }
`;

export const SpanTexto = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: #b3b3b3;
  margin-top: 2px;
`;
