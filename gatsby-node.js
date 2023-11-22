// gatsby-node.js

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Fetch your artists data, replace this with your actual data source
  const artistsData = [
    {
      title: "GESPONA",
      link: "gespona",
      description: "Description for Gespona",
    },
    {
      title: "DJOLEE",
      link: "djolee",
      description: "Description for Djolee",
    },
    {
      title: "AMADORI",
      link: "amadori",
      description: "Description for Amadori",
    },
    {
      title: "AGUSTIN GIRI",
      link: "agustingiri",
      description: "Description for Agustin Giri",
    },
    {
      title: "ABUK",
      link: "abuk",
      description: "Description for Abuk",
    },
    {
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
