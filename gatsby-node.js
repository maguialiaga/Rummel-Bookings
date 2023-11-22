// gatsby-node.js

import gon from "../assets/images/gon.jpg";
import nico from "../assets/images/nico.jpg";
import jero from "../assets/images/jero.jpg";
import agus from "../assets/images/agus.jpg";
import apo from "../assets/images/apo.jpg";

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Fetch your artists data, replace this with your actual data source
  const artistsData = [
    {
      imageUrl: `${gon}`,
      title: "GESPONA",
      link: "gespona",
      description: "Description for Gespona",
    },
    {
      imageUrl: `${nico}`,
      title: "DJOLEE",
      link: "djolee",
      description: "Description for Djolee",
    },
    {
      imageUrl: `${jero}`,
      title: "AMADORI",
      link: "amadori",
      description: "Description for Amadori",
    },
    {
      imageUrl: `${agus}`,
      title: "AGUSTIN GIRI",
      link: "agustingiri",
      description: "Description for Agustin Giri",
    },
    {
      imageUrl: `${agus}`,
      title: "ABUK",
      link: "abuk",
      description: "Description for Abuk",
    },
    {
      imageUrl: `${apo}`,
      title: "APO LUCIA",
      link: "apolucia",
      description: "Description for Apo",
    },
  ];

  // Create pages for each artist
  artistsData.forEach((artist) => {
    createPage({
      path: `/roaster/${artist.link}`,
      component: require.resolve("./src/templates/artistTemplate.js"),
      context: {
        title: artist.title,
        image: artist.imageUrl,
        description: artist.description,
        // You can pass additional data to the template if needed
        // This data will be available in the page query
      },
    });
  });
};
