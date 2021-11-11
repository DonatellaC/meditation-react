import React from "react";
import Header from "../../components/Header/Header";
import MeditationOptions from "../../components/MeditationOptions/MeditationOptions";
import {
  ContentWelcome,
  LandscapeWelcome,
  SubTitle,
} from "./Welcome.styled.js";

function Welcome() {
  return (
    <LandscapeWelcome>
      <Header />
      <ContentWelcome>
        <SubTitle>What would you like to do today?</SubTitle>
        <MeditationOptions />
      </ContentWelcome>
    </LandscapeWelcome>
  );
}

export default Welcome;
