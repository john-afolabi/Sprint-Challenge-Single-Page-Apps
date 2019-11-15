import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import Header from "./Header";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location/").then(res => {
      setLocations(res.data.results);
    });
  }, []);

  return (
    <div>
      <Header />
      <h1>Rick and Morty Locations!</h1>
      <section className="d-flex flex-wrap">
        {locations.map(location => {
          return <LocationCard location={location} key={location.id} />;
        })}
      </section>
    </div>
  );
}
