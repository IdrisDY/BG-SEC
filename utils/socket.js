import { io } from "socket.io-client";

const socketURL = process.env.NEXT_PUBLIC_SOCKET_URL;

// export const socket = io(socketURL, {
//   transports: ["websocket"],
//   timeout: 2000000000,
// });
