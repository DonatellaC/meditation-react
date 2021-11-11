import React from "react";
import Header from "../../components/Header/Header";
import MeditationOptions from "../../components/MeditationOptions/MeditationOptions";
import { LandscapeWelcome } from "./Welcome.styled.js";

function Welcome() {
  return (
    <LandscapeWelcome>
      <Header />
      <section className="content">
        <h2 className="sub-title">What would you like to do today?</h2>
      </section>
      <MeditationOptions />
    </LandscapeWelcome>
  );
}

export default Welcome;
