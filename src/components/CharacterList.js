import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredChar, setFilteredChar] = useState([]);

  const searchHandler = e => {
    setSearch(e.target.value);

    setFilteredChar(
      characters.filter(char => {
        if (char.name.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) != -1) {
          return char;
        }
      })
    );
  };

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      console.log(res);
      setCharacters(res.data.results)
      setFilteredChar(res.data.results);
    });
  }, []);

  useEffect(() => {
    
  }, [])

  return (
    <div>
      <h1>Rick and Morty Characters!</h1>
      <SearchForm search={search} searchHandler={searchHandler}/>
      <section className="character-list d-flex flex-wrap">
        {filteredChar.map(char => {
          return <CharacterCard char={char} key={char.id} />;
        })}
      </section>
    </div>
  );
}
