export const openWebSocket = (stompClient, socket) => ({
  type: "OPEN_WEBSOCKET",
  payload: {
    socket: socket,
    stompClient: stompClient,
  },
});

export const closeWebSocket = () => ({
  type: "CLOSE_WEBSOCKET",
});
