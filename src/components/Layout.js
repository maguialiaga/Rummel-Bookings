import React from "react";
import GlobalStyles from "../components/GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    text: "black",
    background: "white",
  },
  fonts: {
    header: "Montserrat",
    body: "Inter",
  },
}; //aca agrego fonts, colors, etc todo lo que va a usar la pag

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LayoutStyles>
          {children}
          {/* Content of each page, will inyect in children, todos van a tener NavBar y Footer*/}
        </LayoutStyles>
      </ThemeProvider>
    </>
  );
}
