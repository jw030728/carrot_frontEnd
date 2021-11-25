import { useState, ChangeEvent } from "react";

const HiddenName = () => {
  const [name, setName] = useState("");

  const printName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    const len = newName.length;
    if (len > 3) {
      const front = newName.charAt(0);
      const end = newName.charAt(len - 1);
      setName(front + "*".repeat(len - 2) + end);
    } else setName(newName);
  };
  return (
    <>
      <article>{name}</article>
      <input type="text" onChange={printName} />
    </>
  );
};

export default HiddenName;
