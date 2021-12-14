import React, { useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { tradeItems } from "./data";
import TradeInformation from "./components/TradeInformation";
import TradeEvent from "./components/TradeEvent";

const ImageTheme = {
  width: "150px",
  height: "150px",
};

const Home = (): JSX.Element => {
  return (
    <Box>
      <List>
        {tradeItems.map((item): JSX.Element => {
          return (
            <ListItem key={item.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={item.imageUrl}
                    sx={ImageTheme}
                  />
                </ListItemAvatar>
                {/* <TradeInformation
                  title={item.title}
                  location={item.location}
                  createAt={item.createAt}
                  updateAt={item.updateAt}
                  price={item.price}
                /> */}
                <ListItemText
                  primary={
                    <TradeInformation
                      title={item.title}
                      location={item.location}
                      createAt={item.createAt}
                      updateAt={item.updateAt}
                      price={item.price}
                    />
                  }
                  secondary={
                    <TradeEvent chat={item.chat} interest={item.interest} />
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Home;
