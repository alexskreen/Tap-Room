import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;
