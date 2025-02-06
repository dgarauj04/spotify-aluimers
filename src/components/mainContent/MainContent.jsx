import React, { useState } from "react";
import PlaylistContent from "./playlistContent/PlaylistContent";
import styled from "styled-components";

const MainContainer = styled.main`
  max-width: 80vw;
  margin-left: 320px;
`;

export default function MainContent({ artists, searchTerm }) {
  return (
    <MainContainer>
      <PlaylistContent artists={artists} searchTerm={searchTerm} />
    </MainContainer>
  );
}
