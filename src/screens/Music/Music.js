import React from "react";
import Header from "../../components/Header/Header";
import { LandscapeMusic } from "./Music.styled";
import sunsetWaterfall from "../../images/Sunset_Waterfall_Landscape_Illustration_generated.jpg";

import Cards from "../../components/Cards/Cards";

function Music() {
  return (
    <LandscapeMusic>
      <Header title="Relaxing music" color="#2d2e2e" />
      <div>
        <Cards sunsetWaterfall={sunsetWaterfall} title="Magical waterfall" />
      </div>
    </LandscapeMusic>
  );
}

export default Music;
