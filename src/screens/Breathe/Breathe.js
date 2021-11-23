import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import {
  ContainerBreathe,
  Circle,
  GradientCircle,
  GradientCircleBlur,
  LandscapeBreathe,
  Pointer,
  PointerContainer,
  Text,
} from "./Breathe.styled";

const grow = {
  animation: "grow 3s linear forwards",
};

const shrink = {
  animation: "shrink 3s linear forwards",
};

function Breathe() {
  const [text, setText] = useState("Inhale");
  const [isGrowing, setIsGrowing] = useState(false);
  const totalTime = 7500;
  const breatheTime = (totalTime / 5) * 2; //  3 seconds
  const holdTime = totalTime / 5; // 1.5 seconds

  useEffect(() => {
    breatheAnimation();
    setInterval(breatheAnimation, totalTime);

    function breatheAnimation() {
      setText("Inhale");
      setIsGrowing(true);

      setTimeout(() => {
        setText("Hold");

        setTimeout(() => {
          setText("Exhale");
          setIsGrowing(false);
        }, holdTime);
      }, breatheTime);
    }
  }, [breatheTime, holdTime]);

  return (
    <LandscapeBreathe>
      <Header title="Breathe" subTitle="Prepare to breathe" color="#2d2e2e" />
      <ContainerBreathe style={isGrowing ? grow : shrink}>
        <Circle></Circle>
        <Text>{text}</Text>
        <PointerContainer>
          <Pointer></Pointer>
        </PointerContainer>
        <GradientCircle></GradientCircle>
        <GradientCircleBlur></GradientCircleBlur>
      </ContainerBreathe>
      <section></section>
    </LandscapeBreathe>
  );
}

export default Breathe;
