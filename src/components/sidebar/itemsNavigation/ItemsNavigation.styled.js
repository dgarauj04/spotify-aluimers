import styled from 'styled-components';

export const AreaNavigation = styled.ul`
  margin-top: 20px;
  padding: 0 20px 10px 20px;
  li {
    padding: 10px 0;
    list-style: none;
  }
`;

export const ItemNavigation = styled.div`
  display: flex;
  align-items: center;
  color: #b3b3b3;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  span {
    margin-right: 10px;
  }
  &:hover {
    color: #fff;
  }
`;
