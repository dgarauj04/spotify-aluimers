import React, { useState, useEffect } from "react";
import {
  PlaylistContainer,
  ResultPlaylist,
  Playlist,
  Greeting,
  Session,
} from "./PlaylistContent.styled";
import Cards from "./cards/Cards";
import Artistas from "./artists/Artists";

export default function PlaylistContent({ artists = [], searchTerm }) {
  const [showPlaylist, setShowPlaylist] = useState(true);
  useEffect(() => {
    setShowPlaylist(searchTerm === '');
  }, [searchTerm]);

  return (
    <PlaylistContainer>
      {showPlaylist ? (
        <ResultPlaylist id="result-playlists">
          <Playlist>
            <Greeting id="greeting">Boas vindas</Greeting>
            <Session>Navegar por todas as seções</Session>
          </Playlist>
          <Cards />
        </ResultPlaylist>
      ) : (
        <Artistas artists={artists} id="result-artist" />
      )}
    </PlaylistContainer>
  );
}
