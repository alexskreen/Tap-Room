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

function KegList() {
  return (
    <React.Fragment>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg 
        brewery = {keg.brewery}
        beer = {keg.beer}
        beerType = {keg.beerType}
        ABV = {keg.ABV}
        pints = {keg.pints}
        key = {index}/>
      )}
    </React.Fragment>
  );
}

export default KegList;
