import React from "react";
import { Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
      </header>
      <Row>
        <Col>
          <Link to="/characters">
            <Button>Rick & Morty Characters</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/locations">
            <Button>Rick & Morty Locations</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/episodes">
            <Button>Rick & Morty Episodes</Button>
          </Link>
        </Col>
      </Row>
    </section>
  );
}
