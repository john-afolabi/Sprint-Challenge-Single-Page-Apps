import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import Header from "./Header";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode/").then(res => {
      setEpisodes(res.data.results);
    });
  }, []);

  return (
    <div>
      <Header />
      <h1>Rick and Morty Episodes!</h1>
      <section className="d-flex flex-wrap">
        {episodes.map(episode => {
          return <EpisodeCard episode={episode} key={episode.id} />;
        })}
      </section>
    </div>
  );
}
