import React from "react";

function Keg() {
  const beer1 = "Over Ripe";
  const beer2 = "Planets Gotta Roll";
  return (
    <React.Fragment>
      <h3>3a</h3>
      <h3>
        {beer1} and {beer2}
      </h3>
      <p>
        <em>Firebase entries not saving!</em>
      </p>
      <hr />
    </React.Fragment>
  );
}

export default Keg;
