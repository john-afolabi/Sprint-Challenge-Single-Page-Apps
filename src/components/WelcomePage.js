import React from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
      </header>

      <Link to="/characters"><Button>Rick & Morty Characters</Button></Link>
      <Link to="/locations"><Button>Rick & Morty Locations</Button></Link>
      <Link to="/episodes"><Button>Rick & Morty Episodes</Button></Link>
    </section>
  );
}
