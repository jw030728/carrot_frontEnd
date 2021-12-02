import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ForumIcon from "@mui/icons-material/Forum";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type MenuType = {
  title: string;
  icon: JSX.Element;
};

const MenuStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  padding: "10px 5px",
};

const BottomAppBar = (): JSX.Element => {
  const menuItems: MenuType[] = [
    {
      title: "홈",
      icon: <HomeIcon />,
    },
    {
      title: "동네 생활",
      icon: <ArticleIcon />,
    },
    {
      title: "내 근처",
      icon: <LocationOnIcon />,
    },
    {
      title: "채팅",
      icon: <ForumIcon />,
    },
    {
      title: "나의 당근",
      icon: <AccountCircleIcon />,
    },
  ];

  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Grid container>
          {/* map이 반복문 menuitem에 값5개니깐 5반복
            구별을 위한 이름(key)이 필요함  */}
          {menuItems.map((item: MenuType): JSX.Element => {
            return (
              <Grid item xs key={item.title}>
                <Box display="flex" justifyContent="Center">
                  <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    style={MenuStyle}
                  >
                    {item.icon}
                    {item.title}
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default BottomAppBar;
