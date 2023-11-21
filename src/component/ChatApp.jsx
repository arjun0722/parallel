import { useState } from "react";

import { SENDER, RECEIVER } from "../config/config";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../store/ChatReducers";

const ChatApp = () => {
  const [msg, setMsg] = useState("");
  const [sentMsg, setSentMSg] = useState([]);
  //dispatch data to the redux store

  const dispatch = useDispatch();
  const msgData = useSelector((state) => state.chat);

  const handleSendMSg = () => {
    dispatch(addChat(msg));
    // setSentMSg(msg);
    setMsg("");
  };
  return (
    <div
      className="main"
      style={{
        border: "1px solid black",
        width: "40%",
        margin: "0 auto",
        marginTop: "1rem",
      }}
    >
      <div className="receiver">
        {RECEIVER.map((msg, ind) => {
          return <p style={{ textAlign: "left" }}>{msg}</p>;
        })}
      </div>
      <div className="sender"></div>
      {SENDER.map((msg, ind) => {
        return <p style={{ textAlign: "right" }}>{msg}</p>;
      })}
      {msgData.length > 0 &&
        msgData.map((msg, ind) => {
          return <p style={{ textAlign: "right" }}>{msg}</p>;
        })}

      <div className="send_msg">
        <div>
          <input
            placeholder="type your message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button onClick={() => handleSendMSg()}>Send</button>
      </div>
    </div>
  );
};
export default ChatApp;
