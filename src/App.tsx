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

// const App = () => {
//   // const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
//   //   console.log(event.key);
//   //   if (event.key === "h") {
//   //     event.preventDefault();
//   //     event.stopPropagation();
//   //   }
//   // };
//   // const [lastName, setLastName] = useState(""); //
//   // const updateLastName = (name: string) => {
//   //   setLastName(name);
//   // };

//   return (
//     <>
//       {/* preventKeyDown뒤에 ()안하는 이유 바로 실행되기때문에 */}
//       {/* <input type="text" onKeyDown={preventKeyDown} /> */}
//       {/* <Button name="hello" callback={updateLastName} />
//       <Button name="void" callback={updateLastName} />
//       <Button name="nextop" callback={updateLastName} />
//       <article>{lastName} is clicked! </article> */}
//       <Test />
//     </>
//   );
// };

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";

const App = () => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      {/* 앱바 사이에 작성하면 가려져서안댐 따라서 <Toolbar/>쓰고 써야댐 */}
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid container>
            <Grid item xs style={{ backgroundColor: "#ff9fff" }}>
              <Box display="fles" justifyContent="center">
                홈
              </Box>
            </Grid>
            <Grid item xs style={{ backgroundColor: "#ff9fff" }}>
              <Box display="fles" justifyContent="center">
                동네생활
              </Box>
            </Grid>
            <Grid item xs style={{ backgroundColor: "#ff9fff" }}>
              <Box display="fles" justifyContent="center">
                내 근처
              </Box>
            </Grid>
            <Grid item xs style={{ backgroundColor: "#ff9fff" }}>
              <Box display="fles" justifyContent="center">
                채팅
              </Box>
            </Grid>
            <Grid item xs style={{ backgroundColor: "#ff9fff" }}>
              <Box display="fles" justifyContent="center">
                나의당근
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </main>
  );
};

export default App;
