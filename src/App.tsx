import React, { useState } from "react";
import "./App.css";
import Photo from "./Photo";
import { ChangeEvent } from "react";
import { KeyboardEvent } from "react";
import Counter from "./Counter";
import Adder from "./Adder";
import Welcome from "./Welcome";
import ConditionalText from "./ConditionalText";
import HiddenName from "./HiddenName";
import Button from "./Button";
import Calculator from "./pages/Test/components/Calculator";
import Test from "./pages/Test";

// function App() {
//   return (
//     <div className="App">
//       <Photo
//         adress="https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
//         description="photo"
//       />
//     </div>
//   );
// }

const App = () => {
  // const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
  //   console.log(event.key);
  //   if (event.key === "h") {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  // };
  // const [lastName, setLastName] = useState(""); //
  // const updateLastName = (name: string) => {
  //   setLastName(name);
  // };

  return (
    <>
      {/* preventKeyDown뒤에 ()안하는 이유 바로 실행되기때문에 */}
      {/* <input type="text" onKeyDown={preventKeyDown} /> */}
      {/* <Button name="hello" callback={updateLastName} />
      <Button name="void" callback={updateLastName} />
      <Button name="nextop" callback={updateLastName} />
      <article>{lastName} is clicked! </article> */}
      <Test />
    </>
  );
};

export default App;
