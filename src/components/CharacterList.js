import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Button, Col, Row } from "reactstrap";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredChar, setFilteredChar] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [currURL, setCurrURL] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  const searchHandler = e => {
    setSearch(e.target.value);

    setFilteredChar(
      characters.filter(char => {
        if (
          char.name
            .toLocaleLowerCase()
            .indexOf(e.target.value.toLocaleLowerCase()) !== -1
        ) {
          return char;
        }
      })
    );
  };

  useEffect(() => {
    axios.get(currURL).then(res => {
      setNext(res.data.info.next);
      setPrev(res.data.info.prev);
      setCharacters(res.data.results);
      setFilteredChar(res.data.results);
    });
  }, [currURL]);

  useEffect(() => {}, []);

  return (
    <div>
      <SearchForm search={search} searchHandler={searchHandler} />
      <section className="character-list d-flex flex-wrap">
        {filteredChar.map(char => {
          return <CharacterCard char={char} key={char.id} />;
        })}
      </section>
      <Row>
        <Col xs="6">
          <Button onClick={() => setCurrURL(prev)}>Previous Page</Button>
        </Col>
        <Col xs="6">
          <Button onClick={() => setCurrURL(next)}>Next Page</Button>
        </Col>
      </Row>
    </div>
  );
}
