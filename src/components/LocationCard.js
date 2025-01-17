import React from "react";
import { Card, CardText, CardTitle, CardSubtitle } from "reactstrap";

export default function LocationCard({ location }) {
  return (
    <Card>
      <div>
        <CardTitle>
          <strong>{location.name}</strong>
        </CardTitle>
        <CardSubtitle>
          <strong>{location.type}</strong>
        </CardSubtitle>
        <CardText>
          {location.name} is a {location.type} and has{" "}
          {location.residents.length} residents
        </CardText>
      </div>
    </Card>
  );
}
