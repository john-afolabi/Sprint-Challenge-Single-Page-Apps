import React from "react";
import { Card, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";
import "./CharacterCard.css";

export default function CharacterCard(props) {
  return (
    <Card>
      <CardImg top width="100%" src={props.char.image} alt="Card image cap" />
      <div>
      <CardTitle><strong>{props.char.name}</strong></CardTitle>
      <CardSubtitle><strong>{props.char.species}</strong></CardSubtitle>
      <CardText>
        {props.char.name} is a {props.char.species} from{" "}
        {props.char.origin.name} and has been featured in {props.char.episode.length} episodes
      </CardText>
      </div>
    </Card>
  );
}
