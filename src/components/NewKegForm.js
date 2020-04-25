import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      brewery: event.target.brewery.value,
      beer: event.target.beer.value,
      beerType: event.target.beerType.value,
      ABV: event.target.ABV.value,
      id: v4()
    });
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

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
