import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg, index) =>
      <Keg 
      brewery={keg.brewery}
      beer={keg.beer}
      beerType={keg.beerType}
      ABV={keg.ABV}
      key={index} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};


export default KegList;
