import { useState } from "react";
import styled from "styled-components";

export const ClickBtn = styled.button`
  background-color: tomato;
  color: white;
  font-weight: 600;
  font-size: 18px;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
`;

export default function Count() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((current) => current + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <ClickBtn onClick={onClick}>Click me to count</ClickBtn>
    </>
  );
}
