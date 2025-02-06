import React from "react";
import {
  OfferScrollContainer,
  OfferListItem,
  Postcards,
  CardSpan,
} from "./Cards.styled";

const Card = ({ imageSrc, text, background, href }) => (
  <Postcards href={href} className="cards" style={{ background }}>
    <img src={imageSrc} alt={text} />
    <CardSpan>{text}</CardSpan>
  </Postcards>
);

export default function Cards() {
  const cardsData = [
    {
      imageSrc: "../../../..//assets/playlist/1.jepg",
      text: "Boas festas",
      background: "rgb(0, 100, 80)",
      href: "https://example.com/boas-festas",
    },
    {
      imageSrc: "../../../../assets/playlist/2.png",
      text: "Feitos para você",
      background: "rgb(132, 0, 231)",
      href: "https://example.com/feitos-para-voce",
    },
    {
      imageSrc: "../../../../assets/playlist/3.jpeg",
      text: "Lançamentos",
      background: "rgb(30, 50, 100)",
      href: "https://example.com/lancamentos",
    },
    {
      imageSrc: "../../../../src/assets/playlist/4.jpeg",
      text: "Creators",
      background: "rgb(140, 25, 50)",
      href: "https://example.com/creators",
    },
    {
      imageSrc: "../../../../assets/playlist/5.jpeg",
      text: "Para treinar",
      background: "rgb(232, 17, 91)",
      href: "https://example.com/para-treinar",
    },
    {
      imageSrc: "../../../../assets/playlist/6.jpeg",
      text: "Podcasts",
      background: "rgb(83, 122, 161)",
      href: "https://example.com/podcasts",
    },
    {
      imageSrc: "../../../../assets/playlist/7.jpeg",
      text: "Sertanejo",
      background: "rgb(142, 102, 172)",
      href: "https://example.com/sertanejo",
    },
    {
      imageSrc: "../../../../assets/playlist/8.jpeg",
      text: "Samba e pagode",
      background: "rgb(20, 138, 8)",
      href: "https://example.com/samba-e-pagode",
    },
    {
      imageSrc: "../../../../assets/playlist/9.jpeg",
      text: "Funk",
      background: "rgb(30, 50, 100)",
      href: "https://example.com/funk",
    },
    {
      imageSrc: "../../../../assets/playlist/10.jpeg",
      text: "MPB",
      background: "rgb(233, 20, 41)",
      href: "https://example.com/mpb",
    },
    {
      imageSrc: "../../../../assets/playlist/11.jpeg",
      text: "Rock",
      background: "rgb(80, 55, 80)",
      href: "https://example.com/rock",
    },
    {
      imageSrc: "../../../../assets/playlist/12.jpeg",
      text: "Hip Hop",
      background: "rgb(216, 64, 0)",
      href: "https://example.com/hip-hop",
    },
    {
      imageSrc: "../../../../assets/playlist/13.jpeg",
      text: "Indie",
      background: "rgb(186, 93, 7)",
      href: "https://example.com/indie",
    },
    {
      imageSrc: "../../../../assets/playlist/14.jpeg",
      text: "Relax",
      background: "rgb(0, 30, 80)",
      href: "https://example.com/relax",
    },
    {
      imageSrc: "../../../../assets/playlist/15.jpeg",
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
