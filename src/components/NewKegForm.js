import React from "react";
import { v4 } from 'uuid';

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.brewery.value);
    console.log(event.target.beer.value);
    console.log(event.target.beerType.value);
    console.log(event.target.ABV.value);


  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input type="text" name="brewery" placeholder="Brewery" />
        <input type="text" name="beer" placeholder="Beer" />
        <input type="text" name="beerType" placeholder="Type of Beer" />
        <input type="text" name="ABV" placeholder="ABV" />
        <button type="submit">Add Keg</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;
