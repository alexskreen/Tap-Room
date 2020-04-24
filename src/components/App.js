import React from "react";
import Header from "./Header";

function App() {
  const name = "Alex";
  const name2 = "Cory";
  return (
    <React.Fragment>
      <Header />
      <h3>3a</h3>
      <h3>
        {name} and {name2}
      </h3>
      <p>
        <em>Firebase entries not saving!</em>
      </p>
      <hr />
    </React.Fragment>
  );
}

export default App;
