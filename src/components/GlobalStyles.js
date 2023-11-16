import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  }
`;

// export const Container = styled.div`
//   width: 100%;
//   background-color: transparent;
//   max-width: 1300px;
//   margin-right: auto;
//   margin-left: auto;
//   padding: 0 50px;
//   @media screen and (max-width: 960px) {
//     padding: 0 30px;
//   }
// `;

export default GlobalStyles;
