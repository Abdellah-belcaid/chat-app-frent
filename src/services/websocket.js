// src/services/WebSocketService.js
import { Stomp } from "@stomp/stompjs";

const websocketService = () => {
  let stompClient = null;

  const connectWebSocket = (fullname, nickname) => {
    const socket = new WebSocket("ws://localhost:8088/ws");
    stompClient = Stomp.over(() => socket);

    stompClient.connect({}, () => {
      console.log("Connected to WebSocket");

      stompClient.subscribe(
        `/user/${nickname}/queue/messages`,
        onMessageReceived
      );
      stompClient.subscribe(`/user/public`, onMessageReceived);

      console.log("this is add method", fullname, nickname);
      stompClient.send(
        "/app/user.addUser",
        {},
        JSON.stringify({
          nickName: nickname,
          fullName: fullname,
          status: "ONLINE",
        })
      );
    });
  };

  const disconnectWebSocket = () => {
    if (stompClient) {
      stompClient.disconnect(() => {
        console.log("Disconnected from WebSocket");
      });
    }
  };

  const registerUser = (nickname, fullname) => {
    if (stompClient) {
      console.log("this is add method", fullname, nickname);
      stompClient.send(
        "/app/user.addUser",
        {},
        JSON.stringify({
          nickName: nickname,
          fullName: fullname,
          status: "ONLINE",
        })
      );
    }
  };

  const onMessageReceived = (payload) => {
    const message = JSON.parse(payload.body);
    console.log("Message received", message);
  };

  return {
    connectWebSocket,
    disconnectWebSocket,
    registerUser,
  };
};

export default websocketService;
