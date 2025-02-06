import React from "react";
import {
  OfferScrollContainer,
  OfferListItem,
  Postcards,
  CardSpan,
} from "./Cards.styled";
import imgBoasFestas from "../../../../assets/playlist/1.jpeg";
import imgFeitosParaVoce from "../../../../assets/playlist/2.png";
import imgLancamentos from "../../../../assets/playlist/3.jpeg";
import imgCreators from "../../../../assets/playlist/4.jpeg";
import imgParaTreinar from "../../../../assets/playlist/5.jpeg";
import imgPodcasts from "../../../../assets/playlist/6.jpeg";
import imgSertanejo from "../../../../assets/playlist/7.jpeg";
import imgSambaEPagode from "../../../../assets/playlist/8.jpeg";
import imgFunk from "../../../../assets/playlist/9.jpeg";
import imgMPB from "../../../../assets/playlist/10.jpeg";
import imgRock from "../../../../assets/playlist/11.jpeg";
import imgHipHop from "../../../../assets/playlist/12.jpeg";
import imgIndie from "../../../../assets/playlist/13.jpeg";
import imgRelax from "../../../../assets/playlist/14.jpeg";
import imgMusicaLatina from "../../../../assets/playlist/15.jpeg";

const Card = ({ imageSrc, text, background, href }) => (
  <Postcards href={href} className="cards" style={{ background }}>
    <img src={imageSrc} alt={text} />
    <CardSpan>{text}</CardSpan>
  </Postcards>
);

export default function Cards() {
  const cardsData = [
    {
      imageSrc: imgBoasFestas,
      text: "Boas festas",
      background: "rgb(0, 100, 80)",
      href: "https://example.com/boas-festas",
    },
    {
      imageSrc: imgFeitosParaVoce,
      text: "Feitos para você",
      background: "rgb(132, 0, 231)",
      href: "https://example.com/feitos-para-voce",
    },
    {
      imageSrc: imgLancamentos,
      text: "Lançamentos",
      background: "rgb(30, 50, 100)",
      href: "https://example.com/lancamentos",
    },
    {
      imageSrc: imgCreators,
      text: "Creators",
      background: "rgb(140, 25, 50)",
      href: "https://example.com/creators",
    },
    {
      imageSrc: imgParaTreinar,
      text: "Para treinar",
      background: "rgb(232, 17, 91)",
      href: "https://example.com/para-treinar",
    },
    {
      imageSrc: imgPodcasts,
      text: "Podcasts",
      background: "rgb(83, 122, 161)",
      href: "https://example.com/podcasts",
    },
    {
      imageSrc: imgSertanejo,
      text: "Sertanejo",
      background: "rgb(142, 102, 172)",
      href: "https://example.com/sertanejo",
    },
    {
      imageSrc: imgSambaEPagode,
      text: "Samba e pagode",
      background: "rgb(20, 138, 8)",
      href: "https://example.com/samba-e-pagode",
    },
    {
      imageSrc: imgFunk,
      text: "Funk",
      background: "rgb(30, 50, 100)",
      href: "https://example.com/funk",
    },
    {
      imageSrc: imgMPB,
      text: "MPB",
      background: "rgb(233, 20, 41)",
      href: "https://example.com/mpb",
    },
    {
      imageSrc: imgRock,
      text: "Rock",
      background: "rgb(80, 55, 80)",
      href: "https://example.com/rock",
    },
    {
      imageSrc: imgHipHop,
      text: "Hip Hop",
      background: "rgb(216, 64, 0)",
      href: "https://example.com/hip-hop",
    },
    {
      imageSrc: imgIndie,
      text: "Indie",
      background: "rgb(186, 93, 7)",
      href: "https://example.com/indie",
    },
    {
      imageSrc: imgRelax,
      text: "Relax",
      background: "rgb(0, 30, 80)",
      href: "https://example.com/relax",
    },
    {
      imageSrc: imgMusicaLatina,
      text: "Música Latina",
      background: "rgb(60, 30, 80)",
      href: "https://example.com/musica-latina",
    },
  ];

  return (
    <>
      <OfferScrollContainer>
        <div className="offer__list">
          <OfferListItem>
            {cardsData.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                text={card.text}
                background={card.background}
                href={card.href}
              />
            ))}
          </OfferListItem>
        </div>
      </OfferScrollContainer>
    </>
  );
}
