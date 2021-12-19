import {
  Avatar,
  Container,
  Grid,
  LinearProgress,
  Typography,
  AppBar,
  Toolbar,
  Box,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TradeAppBar from "./components/TradeAppBar";

const TradeDetail = (): JSX.Element => {
  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <Avatar
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.fmkorea.com%2Ffiles%2Fattach%2Fnew%2F20201104%2F4477817%2F2384631287%2F3181473214%2F1cb012d7353f31a581a445047b539da9.jpeg&f=1&nofb=1"
            sx={{ width: 80, height: 80 }}
          />
        </Grid>

        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6">아이디</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">지역</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={2}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" color="primary">
                36.6
              </Typography>
              <LinearProgress
                variant="determinate"
                value={70}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Grid>
            <Grid item xs={4}>
              <SentimentSatisfiedAltIcon fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <Typography variant="h4" color="primary">
        제목
      </Typography>
      <Box>
        <br />
        본문
      </Box>
      <TradeAppBar price={1} isAdjustable={true} isInterest={true} />
    </>
  );
};

export default TradeDetail;
