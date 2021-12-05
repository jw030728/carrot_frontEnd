import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";

type TradeInformationType = {
  title: string;
  location: string;
  createAt: Date;
  updateAt?: Date;
  price: number;
};

const TradeInformation = (information: TradeInformationType): JSX.Element => {
  const { title, location, price, createAt, updateAt } = information;
  const date = updateAt != null ? moment(updateAt) : moment(createAt);
  const displayDate = date.format("YYYY-MM-DD HH:mm");

  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1" style={{ color: "rgba(0,0,0,0,5)" }}>
        {location}*{displayDate}
      </Typography>
      <Typography variant="subtitle1">
        <strong>{price}원</strong>
      </Typography>
    </Box>
  );
};

export default TradeInformation;
