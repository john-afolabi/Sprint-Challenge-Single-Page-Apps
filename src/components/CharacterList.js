import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      console.log(res);
      setCharacters(res.data.results);
    });
  }, []);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list d-flex flex-wrap">
      {characters.map(char => {
        return (
          <CharacterCard char={char} key={char.id}/>
        );
      })}
    </section>
  );
}
