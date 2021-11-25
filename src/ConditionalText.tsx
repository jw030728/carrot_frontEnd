import { useState, ChangeEvent } from "react";

const ConditionalText = () => {
  const [str, setStr] = useState("");

  const printStr = (event: ChangeEvent<HTMLInputElement>) => {
    setStr(event.currentTarget.value);
  };

  return (
    <>
      <article>{str.length > 5 && str}</article>
      <input type="text" onChange={printStr} />
    </>
  );
};

export default ConditionalText;
