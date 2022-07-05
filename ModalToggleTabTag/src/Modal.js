import { useState } from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: "dialog"
}))`
  color: black;
  padding: 30px 90px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  width: 120px;
  height: 70px;
  position: fixed;
  border-radius: 25px;
`;

export const Modal = () => {
  const [isOpened, setIsOpened] = useState(false);

  const opendModalHandler = (event) => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={opendModalHandler}>
          {isOpened ? "Opened" : "Click to open!"}
        </ModalBtn>
        {isOpened ? (
          <ModalBackdrop>
            <ModalView>
              <div onClick={opendModalHandler}></div>
              <div onClick={opendModalHandler}>X</div>
              <div>Helloooo!</div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
