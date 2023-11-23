import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Artist from "../components/Artist";
//import NameSlider from "../components/NameSlider";

function artistTemplate({ data }) {
  return (
    <Layout>
      <NavBar />
      <Artist />
    </Layout>
  );
}

export default artistTemplate;
