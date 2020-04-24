import React from "react";
import PropTypes from "prop-types";

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

Ticket.PropTypes = {
  brewery: PropTypes.string,
  beer: PropTypes.string,
  beerType: PropTypes.string,
  ABV: PropTypes.string,
};

export default Keg;
