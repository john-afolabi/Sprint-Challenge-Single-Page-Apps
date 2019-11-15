import React from "react";
import { Card, CardText, CardTitle, CardSubtitle } from "reactstrap";

export default function EpisodeCard({ episode }) {
  return (
    <Card>
      <div>
        <CardTitle>
          <strong>{episode.name}</strong>
        </CardTitle>
        <CardSubtitle>
          <strong>{episode.air_date}</strong>
        </CardSubtitle>
        <CardText>
          {episode.episode} titled {episode.name} was aired on{" "}
          {episode.air_date} and featured {episode.characters.length} characters
        </CardText>
      </div>
    </Card>
  );
}
