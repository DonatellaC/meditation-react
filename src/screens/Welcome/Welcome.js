import React from "react";
import Header from "../../components/Header/Header";
import MeditationOptions from "../../components/MeditationOptions/MeditationOptions";
import { ContentWelcome, LandscapeWelcome } from "./Welcome.styled.js";

function Welcome() {
  return (
    <LandscapeWelcome>
      <Header title="Welcome" subTitle="What would you like to do today?" />
      <ContentWelcome>
        <MeditationOptions />
      </ContentWelcome>
    </LandscapeWelcome>
  );
}

export default Welcome;
