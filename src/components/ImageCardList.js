import React from "react";
import styled from "styled-components";
import gon from "../assets/images/gon.jpg";
import nico from "../assets/images/nico.jpg";
import jero from "../assets/images/jero.jpg";
import agus from "../assets/images/agus.jpg";
import apo from "../assets/images/apo.jpg";
import abuk from "../assets/images/abuk.jpg";

// import NameSlider from "../components/NameSlider";
import { Link } from "gatsby";

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const CardContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative; /* Set position to relative */
  z-index: 1; /* Ensure the cards are in front of the background */
`;

const Card = styled.div`
  width: 400px;
  margin: 15px;

  overflow: hidden;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
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
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const CardTitle = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.9em;
  color: #666;
`;

const ImageCard = ({ imageUrl, title, description, link }) => {
  return (
    <>
      <CardLink to={`/roaster/${link}`}>
        <Card>
          <CardImage src={imageUrl} alt={title} />
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </Card>
      </CardLink>
    </>
  );
};

const ImageCardList = () => {
  // Example data
  const cardsData = [
    {
      imageUrl: `${gon}`,
      title: "GESPONA",
      link: "gespona",
      //description: "Description for Card 1",
    },
    {
      imageUrl: `${nico}`,
      title: "DJOLEE",
      link: "djolee",
      // description: "Description for Card 2",
    },
    {
      imageUrl: `${jero}`,
      title: "AMADORI",
      link: "amadori",
      // description: "Description for Card 1",
    },
    {
      imageUrl: `${agus}`,
      title: "AGUSTIN GIRI",
      link: "agustingiri",
      // description: "Description for Card 1",
    },
    {
      imageUrl: `${abuk}`,
      title: "ABUK",
      link: "abuk",
      // description: "Description for Card 1",
    },
    {
      imageUrl: `${apo}`,
      title: "APO LUCIA",
      link: "apolucia",
      // description: "Description for Card 1",
    },
  ];

  return (
    <>
      <CardContainer>
        {cardsData.map((card, index) => (
          <ImageCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            link={card.link}
            description={card.description}
          />
        ))}
      </CardContainer>
    </>
  );
};

export default ImageCardList;
