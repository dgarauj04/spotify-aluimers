import React from "react";
import {
  ResultArtist,
  GridContainer,
  ArtistCard,
  CardImg,
  CardText,
  ArtistName,
  ArtistCategorie,
  Play,
  SpanFaPlay,
  TextFormat,
} from "./Artists.styled";
import { FaPlay } from "react-icons/fa6";

export default function Artists({ artists }) {
  if (!artists || artists.length === 0) {
    return (
      <ResultArtist id="result-artist">
        <p>Nenhum artista encontrado correspondente à sua pesquisa.</p>
      </ResultArtist>
    );
  }

  return (
    <>
      <ResultArtist id="result-artist">
        <GridContainer>
          {artists.map((artist, index) => (
            <ArtistCard key={index}>
              <CardImg>
                <img
                  id="artist-img"
                  src={artist.urlImg}
                  alt={`Foto de ${artist.name}`}
                />
                <Play>
                  <SpanFaPlay>
                    <FaPlay />
                  </SpanFaPlay>
                </Play>
              </CardImg>

              <CardText>
                <TextFormat title={artist.name} className="vst" href="">
                  <ArtistName id="artist-name">{artist.name}</ArtistName>
                  <ArtistCategorie>Artista</ArtistCategorie>
                </TextFormat>
              </CardText>
            </ArtistCard>
          ))}
        </GridContainer>
      </ResultArtist>
    </>
  );
}
