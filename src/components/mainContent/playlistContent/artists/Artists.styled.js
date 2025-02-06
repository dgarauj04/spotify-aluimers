import styled from "styled-components";

export const Artist = styled.div`
  --column-count: 5;
  --grid-gap: 24px;
  --min-container-width: 372px;
`;

export const ResultArtist = styled.section`
  padding: 20px 40px;
  display: ${(props) => (props.hidden ? "none" : "block")};
`;

export const GridContainer = styled.div`
  grid-gap: 24px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  min-width: 767px;
`;

export const Play = styled.div`
  position: relative;
`;

export const SpanFaPlay = styled.span`
  position: absolute;
  right: 10px;
  top: 120px;
  padding: 18px;
  background-color: #1db954;
  border-radius: 100%;
  font-size: 14px;
  opacity: 0;
  transition: all ease 0.4s;
  &:hover {
    padding: 20px;
    cursor: pointer;
  }
`;

export const ArtistCard = styled.div`
  border-radius: 8px;
  -ms-flex: 1;
  flex: 1;
  isolation: isolate;
  position: relative;
  transition: background-color 0.3s ease;
  width: 9rem;
  &:hover {
    background-color: #252525;

    ${Play} {
      ${SpanFaPlay} {
        opacity: 1;
        transform: translateY(-20px);
      }
    }
  }
`;

export const CardImg = styled.div`
  padding-bottom: 100%;
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  img {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: 50%;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-height: 50px;
  padding: 1rem;
`;

export const TextFormat = styled.div`
  display: inline-flex;
  max-width: 100%;
  flex-direction: column;
  gap: 10px;
  vertical-align: middle;
`;

export const ArtistName = styled.a`
  box-sizing: border-box;
  margin-block: 0px;
  font-size: 16px;
  font-weight: 700;
  padding-block-end: 8px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ArtistCategorie = styled.span`
  color: #6a6a6a;
  font-weight: 400;
  font-size: 0.875rem;
`;
