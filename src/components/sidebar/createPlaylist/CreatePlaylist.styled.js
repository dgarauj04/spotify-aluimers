import styled from "styled-components";

export const SectionPlaylist = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  background-color: #242424;
  color: #b3b3b3;
  font-weight: 600;
  font-size: 14px;
  margin: 8px 0;
  padding: 16px 20px;
  border-radius: 10px;
`;

export const PlaylistContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  padding-bottom: 14px;
  color: #fff;

  &.title {
    font-weight: 700;
  }

  &.subtitle {
    font-weight: 500;
    font-size: 12px;
  }
`;
export const PlaylistButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  color: #000;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  text-transform: none;
  padding: 10px;
  margin-top: 12px;
  border: 0;
  width: 113px;
`;
