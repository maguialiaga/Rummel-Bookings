import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Gespona from "../components/Gespona";

function artistTemplate({ data }) {
  return (
    <Layout>
      <NavBar />
      <Gespona />
    </Layout>
  );
}

export default artistTemplate;
