import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import { Container } from "reactstrap";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";

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

      <Route
        exact
        path="/locations"
        render={props => {
          return <LocationsList {...props} />;
        }}
      />

      <Route
        exact
        path="/episodes"
        render={props => {
          return <EpisodeList {...props} />;
        }}
      />
    </Container>
  );
}
