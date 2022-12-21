import React from "react";
import { styled } from "@mui/material/styles";
import Intro from "./components/Intro";
import BeautifulThemes from "./components/BeautifulThemes";
import Backend from "./components/Backend";

const Container = styled("div")(({ theme }) => ({
  minWidth: "100%"
}));

const App = () => {
  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Container>
        <Intro />
      </Container>
      <BeautifulThemes />
      <Backend />
    </div>
  );
};

export default App;
