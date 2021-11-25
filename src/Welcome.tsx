import { useState, ChangeEvent } from "react";

const Welcome = () => {
  const [name, setName] = useState(""); //useState<string>()이렇게해도됨
  const printName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    setName(newName);
  };

  return (
    <>
      <article>반갑습니다 {name}</article>
      <input type="text" onChange={printName} />
    </>
  );
};

export default Welcome;
