import React from "react";
import Keg from "./Keg";

function TapList() {
  return (
  <Keg 
    brewery = "Great Notion Brewing"
    beer = "Over Ripe IPA"
    beerType = "NE IPA"
    ABV = "7%"/>
  <Keg 
    brewery = "Monkish Brewing"
    beer = "Planets Gotta Roll"
    beerType = "Double NE IPA"
    ABV = "8.3%"/>
  );
}

export default TapList;
