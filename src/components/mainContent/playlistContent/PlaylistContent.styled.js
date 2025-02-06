import styled from 'styled-components';

export const PlaylistContainer = styled.section`
  height: 70vh;
  padding-top: 16px;
  margin: 10px;
  border-radius: 10px;
  background: transparent;
  max-width: 80vw;
  margin-right: 15px;
`;

export const ResultPlaylist = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`;

export const Playlist = styled.div`
  margin: 24px;
`;

export const Greeting = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 48px;
`;

export const Session = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;
