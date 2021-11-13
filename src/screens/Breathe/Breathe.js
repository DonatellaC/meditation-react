import React from "react";
import Header from "../../components/Header/Header";
import {
  ContainerBreathe,
  Button,
  ButtonsBreathe,
  Circle,
  GradientCircle,
  GradientCircleBlur,
  LandscapeBreathe,
  Pointer,
  PointerContainer,
  Text,
} from "./Breathe.styled";

function Breathe() {
  return (
    <LandscapeBreathe>
      <Header title="Breathe" subTitle="Prepare to breathe" color={"#2d2e2e"} />
      <ContainerBreathe>
        <Circle></Circle>
        <Text id="text">Inhale</Text>
        <PointerContainer>
          <Pointer></Pointer>
        </PointerContainer>
        <GradientCircle></GradientCircle>
        <GradientCircleBlur></GradientCircleBlur>
      </ContainerBreathe>
      <section className="breathe-options">
        <ButtonsBreathe>
          <Button>3 Times</Button>
          <Button>5 Times</Button>
          <Button>10 Times</Button>
        </ButtonsBreathe>
      </section>
    </LandscapeBreathe>
  );
}

export default Breathe;
