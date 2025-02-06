import React, { useState } from "react";
import AreaPlaylist from "./playlistContent/PlaylistContent";
import styled from "styled-components";

const MainContainer = styled.main`
  max-width: 80vw;
  margin-left: 320px;
`;

export default function MainContent({ artists, searchTerm }) {
  return (
    <MainContainer>
      <AreaPlaylist artists={artists} searchTerm={searchTerm} />
    </MainContainer>
  );
}
