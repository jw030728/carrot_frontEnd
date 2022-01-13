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
import { useEffect } from "react";
import axios from "axios";

const ImageTheme = {
  width: "150px",
  height: "150px",
};

//브라우저에서 서버로 데이터 수신할 때 도메인과 포트가 다르면 에러
//useEffect실행 서버한테 데이터 요청 데이터 오면 state 바꾸고 state를 바꾸면 화면을 새로 그리는데 이때 서버에서 준 값으로 화면을 그림

type TradeItem = {
  id: string;
  image: string;
  title: string;
  location: string;
  createAt: Date;
  updateAt?: Date;
  price: number;
  chat?: number;
  interest?: number;
};

const Home = (): JSX.Element => {
  const [tradeItems, setTradeItems] = useState<TradeItem[]>([]);
  const readArticles = async () => {
    const { data } = await axios.get("http://localhost:5000/trade/articles");
    setTradeItems(data);
  };
  //useEffect 경고창을 1회 띄울수 있음 화면이 그려질 때 실행, 이 기능으로 서버에서 데이터를 받아올 수 있음 return보다 먼저 적어야함
  //useEffect는 비동기처리 사용이 안됨
  useEffect(() => {
    readArticles();
  }, []);
  return (
    <Box>
      <List>
        {tradeItems.map((item): JSX.Element => {
          return (
            <ListItem key={item.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar variant="rounded" src={item.image} sx={ImageTheme} />
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
