import styled from "styled-components";
import landscapeBreathe from "../../images/vector-beautiful-landscape-illustration.jpg";

export const LandscapeBreathe = styled.div`
  background: url(${landscapeBreathe}) no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerBreathe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 300px;
  width: 300px;
  position: relative;
  transform: scale(1);

  @keyframes grow {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }

  @keyframes shrink {
    from {
      transform: scale(1.2);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const Text = styled.p`
  font-size: 35px;
  color: #2d2e2e;
`;

export const Circle = styled.div`
  background-color: #fad0c2;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const GradientCircle = styled.div`
  background: conic-gradient(
    #f57986 0%,
    #ee8892 40%,
    #dbeee5 40%,
    #aaf09f 60%,
    #ffea85 60%,
    #ffea85 100%
  );
  height: 320px;
  width: 320px;
  z-index: -3;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: -10px;
`;

export const GradientCircleBlur = styled.div`
  background: conic-gradient(
    #e91f33 0%,
    #ad3541 40%,
    #78e486 40%,
    #275e33 60%,
    #f3db64 60%,
    #ffea85 100%
  );
  height: 320px;
  width: 320px;
  z-index: -3;
  border-radius: 50%;
  position: absolute;
  filter: blur(15px);
  top: -10px;
  left: -10px;
`;

export const PointerContainer = styled.div`
  position: absolute;
  top: -40px;
  left: 140px;
  width: 20px;
  height: 190px;
  animation: rotate 7.5s linear forwards infinite;
  transform-origin: bottom center;
`;

export const Pointer = styled.span`
  background-color: rgb(41, 41, 41);
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: block;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
