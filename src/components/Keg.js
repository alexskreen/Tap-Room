import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  // let pints = "";
  // if (props.pints >0) {
  //   pints = <h3>remaining Pints in this keg {props.pints}</h3>
  // } else {
  //   pints = <h3>I'm sorry, the hype is real and this beer sold out!</h3>
  // }

  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>
          {props.brewery} - {props.beer}
        </h3>
        <p>
          <em>
            {props.beerType} - {props.ABV}
          </em>
        </p>
        <p>
          <button onClick={() => props.whenDrinkClicked(props.id)}>
            Have a pint. You deserve it
          </button>
        </p>
      </div>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  brewery: PropTypes.string,
  beer: PropTypes.string,
  beerType: PropTypes.string,
  ABV: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenDrinkClicked: PropTypes.func,
};

export default Keg;