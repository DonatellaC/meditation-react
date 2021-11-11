import React from "react";
import "./MeditationOption.styled.js";
import buddhistYogaPose from "../../images/buddhist-yoga-pose.png";
import lotus from "../../images/lotus.png";
import nightMode from "../../images/night-mode.png";

import { ImgOptions, Options, Option, Text } from "./MeditationOption.styled";

function MeditationOptions() {
  return (
    <Options>
      <Option>
        <ImgOptions src={buddhistYogaPose} alt="icons of a yoga pose" />
        <Text>
          <h6>Meditation Zen</h6>
          <p>Recommended in the morning</p>
        </Text>
      </Option>
      <Option>
        <ImgOptions src={lotus} alt="icons of a lotus" />
        <Text>
          <h6>Breathing</h6>
          <p>Recommended all day</p>
        </Text>
      </Option>
      <Option>
        <ImgOptions src={nightMode} alt="icons of a moon" />
        <Text>
          <h6>Relaxing music</h6>
          <p>Recommended at night</p>
        </Text>
      </Option>
    </Options>
  );
}

export default MeditationOptions;
