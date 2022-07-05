import { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    background-position: right;
    background: linear-gradient(to left, #8b8b8b 50%, violet 50%) right;
    background-size: 200%;
    transition: 0.5s;

    &.toggle--checked {
      background-position: left;
      background: linear-gradient(to right, violet 50%, #8b8b8b 50%) left;
      background-size: 200%;
      transition: 0.5s;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: 0.5s;

    &.toggle--checked {
      left: 27px;
      transition: 0.5s;
    }
  }
`;

const Desc = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div
          className={`toggle-container ${isOn ? "toggle--checked" : ""}`}
        ></div>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`}></div>
      </ToggleContainer>
      <Desc>
        <div></div>
      </Desc>
    </>
  );
};
