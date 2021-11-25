import { useState, ChangeEvent } from "react";

const Adder = () => {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);

  const updateN1 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNum = Number.parseInt(event.currentTarget.value);
    setnum1(newNum);
  };
  const updateN2 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNum = Number.parseInt(event.currentTarget.value);
    setnum2(newNum);
  };

  const calc = num1 + num2;
  return (
    <>
      <article>결과: {calc}</article>
      <input type="text" onChange={updateN1} />
      <input type="text" onChange={updateN2} />
    </>
  );
};

export default Adder;
