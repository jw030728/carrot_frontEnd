import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";

type TradeEventType = {
  chat?: number;
  interest?: number;
};

const TradeEvent = (props: TradeEventType): JSX.Element => {
  const { chat, interest } = props;
  return (
    <>
      <section>
        {chat && (
          <>
            <ChatIcon />
            {chat}
          </>
        )}
      </section>
      <section>
        {interest && (
          <>
            <FavoriteIcon />
            {interest}
          </>
        )}
      </section>
    </>
  );
};

export default TradeEvent;
