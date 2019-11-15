import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import { Container } from "reactstrap";
import CharacterList from "./components/CharacterList.js";

export default function App() {
  return (
    <Container>
      <Route
        exact
        path="/"
        render={props => {
          return <WelcomePage {...props} />;
        }}
      />

      <Route
        exact
        path="/characters"
        render={props => {
          return <CharacterList {...props} />;
        }}
      />
    </Container>
  );
}
