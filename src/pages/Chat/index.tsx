import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  Chip,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { messages } from "./data";
import moment from "moment";

const TopBottomAppBar = (): JSX.Element => {
  const myId = "me";
  return (
    <>
      <AppBar sx={{ backgroundColor: "#ffffff", color: "#000000" }}>
        <Toolbar>
          <Grid container>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <AccountCircleIcon fontSize="large" />
            </Grid>

            <Grid item xs={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">사가세요</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">10원</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2}>
              <Button variant="contained" color="secondary" fullWidth>
                거래후기남기기
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box>
        <Grid container>
          {messages.map((message): JSX.Element => {
            return (
              <Grid item xs={12} key={message.id}>
                {message.sender !== myId && (
                  <Box display="flex" justifyContent="left" alignItems="end">
                    <Chip label={message.message} />
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                  </Box>
                )}

                {message.sender === myId && (
                  <Box display="flex" justifyContent="right" alignItems="end">
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                    <Chip label={message.message} />
                  </Box>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#ffffff" }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={11}>
              <TextField fullWidth size="small" />
            </Grid>
            <Grid item xs={1}>
              <Box display="flex" justifyContent="center">
                <IconButton>
                  <SendIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBottomAppBar;
