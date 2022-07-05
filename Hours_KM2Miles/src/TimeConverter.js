import { useState } from "react";
import styled from "styled-components";

export const Title = styled.div`
  background-color: yellowgreen;
  margin: 45px 0px;
  padding: 10px 10px;
  font-size: 35px;
  font-weight: 600;
  border-radius: 0px 15px 15px 15px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ResetBtn = styled.button`
  border: none;
  background-color: purple;
  color: white;
  font-weight: 600;
  padding: 10px 5px;
  border-radius: 10px;
  margin-top: 10px;
`;

export const ConvertBtn = styled.button`
  border: none;
  background-color: purple;
  color: white;
  font-weight: 600;
  padding: 10px 5px;
  border-radius: 10px;
  margin-top: 10px;
`;

export default function TimeConverter() {
  const [amount, setAmount] = useState(0);
  const [convert, setConvert] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount("");
  const onConvert = () => {
    reset();
    setConvert((current) => !current);
  };
  return (
    <>
      <Title>Super converter</Title>
      <Container>
        <label htmlFor="amount">Minutes</label>
        <input
          value={convert ? amount * 60 : amount}
          onChange={onChange}
          type="number"
          placeholder="Minutes"
          disabled={convert}
        />
        <label htmlFor="hours">Hours</label>
        <input
          value={convert ? amount : Math.round(amount / 60)}
          type="number"
          placeholder="Hours"
          onChange={onChange}
          disabled={!convert}
        />
        <h3> You want to convert minutes to hours </h3>
        <ConvertBtn onClick={onConvert}>Click me to convert</ConvertBtn>
        <ResetBtn onClick={reset}>Click me to reset</ResetBtn>
      </Container>
    </>
  );
}
