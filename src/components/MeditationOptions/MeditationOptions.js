import React from "react";
import "./MeditationOption.styled.js";
import buddhistYogaPose from "../../images/buddhist-yoga-pose.png";
import lotus from "../../images/lotus.png";
import nightMode from "../../images/night-mode.png";

import { ImgOptions } from "./MeditationOption.styled";

function MeditationOptions() {
  return (
    <div className="meditation-options">
      <article className="option option1">
        <ImgOptions src={buddhistYogaPose} alt="icons of a yoga pose" />
        <div className="text">
          <h6>Meditation Zen</h6>
          <p>Recommended in the morning</p>
        </div>
      </article>
      <article className="option option2">
        <ImgOptions src={lotus} alt="icons of a lotus" />
        <div className="text">
          <h6>Breathing</h6>
          <p>Recommended all day</p>
        </div>
      </article>
      <article className="option option3">
        <ImgOptions src={nightMode} alt="icons of a moon" />
        <div className="text">
          <h6>Relaxing music</h6>
          <p>Recommended at night</p>
        </div>
      </article>
    </div>
  );
}

export default MeditationOptions;
