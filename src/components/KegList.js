import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg,index) =>
        <Keg
          whenKegClicked = {props.onKegSelection}
          brewery={keg.brewery}
          beer={keg.beer}
          beerType={keg.beerType}
          ABV={keg.ABV}
          pints={keg.pints}
          id={keg.id}
          key={ticket.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;
