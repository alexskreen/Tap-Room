import React from "react";

function Keg(props) {
  return (
    <React.Fragment>
      <h3>
        {props.brewery} - {props.beer}
      </h3>
      <p><em>{props.beerType} - {props.ABV}</em></p>
      <hr />
    </React.Fragment>
  );
}

export default Keg;
