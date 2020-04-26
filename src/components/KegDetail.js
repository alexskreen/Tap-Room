import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      {/* <h3>{keg.brewery} - {keg.beer}</h3>
      <p><em>{keg.beerType} - {keg.ABV}</em></p> */}
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
};

export default KegDetail;
