import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
// import NameSlider from "../components/NameSlider";
import ImageCardList from "../components/ImageCardList";

const roaster = () => {
  return (
    <Layout>
      <NavBar />
      {/* <NameSlider /> */}
      <ImageCardList />
    </Layout>
  );
};

export default roaster;
