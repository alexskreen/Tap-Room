import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>
        {keg.brewery} - {keg.beer}
      </h3>
      <p>
        <em>
          {keg.beerType} - {keg.ABV} Pints left: {keg.pints}
        </em>
      </p>
      <button onClick={props.onClickingEdit}>Edit Keg Details</button>{" "}
      <button onClick={() => props.onClickingDelete(keg.id)}>Delete Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  brewery: PropTypes.string,
  beer: PropTypes.string,
  beerType: PropTypes.string,
  ABV: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  onClickingEdit: PropTypes.func,
};

export default KegDetail;
