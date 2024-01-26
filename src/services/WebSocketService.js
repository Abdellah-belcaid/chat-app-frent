// src/services/WebSocketService.js

import { Stomp } from "@stomp/stompjs";

const WebSocketService = () => {
  let stompClient = null;

  const connectWebSocket = () => {
    const socket = new WebSocket("ws://localhost:8080/ws");
    stompClient = Stomp.over(() => socket);

    stompClient.connect({}, () => {
      console.log("Connected to WebSocket");
      // Subscribe to the Public Topic
      // stompClient.subscribe("/topic/public", getAllChats);
      //stompClient.subscribe("/topic/public", onMessageReceived);

      // Request all chats from the server
      stompClient.send(
        "/app/chat.getAllChats",
        {},
        JSON.stringify({ type: "GET_ALL_CHATS" })
      );

      // You can handle additional logic on connection, if needed
    });
  };

  const disconnectWebSocket = () => {
    if (stompClient) {
      stompClient.disconnect(() => {
        console.log("Disconnected from WebSocket");
      });
    }
  };

  const sendMessage = (message) => {
    if (stompClient) {
      stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(message));
    }
  };

  const addUser = (message) => {
    if (stompClient) {
      stompClient.send("/app/chat.addUser", {}, JSON.stringify(message));
    }
  };
  const getAllChats = (payload) => {
    if (payload) {
      var message = JSON.parse(payload.body);
      console.log(message);
    }
  };

  function onMessageReceived(payload) {
    if (payload) {
      var message = JSON.parse(payload.body);
      console.log(message);
    }
  }

  return {
    stompClient,
    connectWebSocket,
    disconnectWebSocket,
    sendMessage,
    addUser,
    getAllChats,
    onMessageReceived,
  };
};

export default WebSocketService;
