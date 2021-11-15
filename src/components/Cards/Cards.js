// import React from "react";
import React, { useState, useRef } from "react";

import { ContainerCard, ImgCard, TextCard, WrapperCard } from "./Cards.styled";
import waterfall from "../../audio/waterfall.mp3";

function Cards({ sunsetWaterfall, title }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Reference music component
  const audioPlayer = useRef();

  const playAudio = () => {
    const previousValue = isPlaying;
    audioPlayer.current.volume = 0.2;
    setIsPlaying(!previousValue);
    if (!previousValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };
  return (
    <>
      <ContainerCard>
        <WrapperCard>
          <ImgCard src={sunsetWaterfall} alt="Sunset Waterfall Illustration" />
          <TextCard>{title}</TextCard>
        </WrapperCard>
        <div>
          <audio ref={audioPlayer} src={waterfall} preload="metadata"></audio>
          <button onClick={playAudio}>{isPlaying ? "Pause" : "Play"}</button>

          {/* current time */}
          <div>0.00</div>

          {/* progress bar */}
          <div>
            <input type="range" />
          </div>

          {/* duration*/}
          <div>1.59</div>
        </div>
      </ContainerCard>
    </>
  );
}

export default Cards;
