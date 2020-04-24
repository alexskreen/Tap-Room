import React from "react";
import Keg from "./Keg";


const masterKegList = [
  {
    brewery: "Great Notion Brewing",
    beer: "Over Ripe IPA",
    beerType: "IPA - New England",
    ABV: "7%",
  },
  {
    brewery: "Monkish Brewing",
    beer: "Planets Gotta Roll",
    beerType: "IPA - Double New England",
    ABV: "8.3%",
  },
  {
    brewery: "Hudson Valley Brewing",
    beer: "Glycerin - Pineapple Peach",
    beerType: "IPA - Sour",
    ABV: "8%",
  }
];

function TapList() {
  return (
    <React.Fragment>
      <Keg
        brewery="Great Notion Brewing"
        beer="Over Ripe IPA"
        beerType="NE IPA"
        ABV="7%"
      />
      <Keg
        brewery="Monkish Brewing"
        beer="Planets Gotta Roll"
        beerType="Double NE IPA"
        ABV="8.3%"
      />
    </React.Fragment>
  );
}

export default TapList;
