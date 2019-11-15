import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
     <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Search by Name"
        value={props.search}
        onChange={e => {
          props.searchHandler(e);
        }}
      />
    </section>
  );
}
