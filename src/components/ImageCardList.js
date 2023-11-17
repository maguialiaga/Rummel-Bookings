import React from "react";
import styled from "styled-components";
import gon from "../assets/images/gon.jpg";
import nico from "../assets/images/nico.jpg";
import jero from "../assets/images/jero.jpg";
import agus from "../assets/images/agus.jpg";

const CardContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  width: 300px;
  margin: 20px;
  /* border-radius: 8px; */
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease-in-out;

  ${Card}:hover & {
    transform: scale(1.2);
  }
`;

const CardContent = styled.div`
  padding: 5px;
`;

const CardTitle = styled.h3`
  justify-content: center;
  margin-bottom: 10px;
  font-size: 1.2em;
`;

const CardDescription = styled.p`
  font-size: 0.9em;
  color: #666;
`;

const ImageCard = ({ imageUrl, title, description }) => {
  return (
    <Card>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const ImageCardList = () => {
  // Example data
  const cardsData = [
    {
      imageUrl: `${gon}`,
      title: "ABUK",
      //description: "Description for Card 1",
    },
    {
      imageUrl: `${nico}`,
      title: "AMADORI",
      // description: "Description for Card 2",
    },
    {
      imageUrl: `${jero}`,
      title: "APO LUCIA",
      // description: "Description for Card 1",
    },
    {
      imageUrl: `${agus}`,
      title: "AGUSTIN GIRI",
      // description: "Description for Card 1",
    },
    {
      imageUrl: `${agus}`,
      title: "DJOLEE",
      // description: "Description for Card 1",
    },
    {
      imageUrl: `${jero}`,
      title: "GESPONA",
      // description: "Description for Card 1",
    },
  ];

  return (
    <CardContainer>
      {cardsData.map((card, index) => (
        <ImageCard
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      ))}
    </CardContainer>
  );
};

export default ImageCardList;
