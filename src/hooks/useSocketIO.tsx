import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { REACT_APP_SOCKET_API_PROXY } from "../config/index";

const createSocketHook = (url: string) => () => {
  const [socket, setSocket] = useState<Socket>();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!connected) {
      const socketIo = io(url, {
        reconnection: true,
        reconnectionDelay: 2000,
        reconnectionDelayMax: 60000,
        reconnectionAttempts: 2,
      });

      socketIo?.connect();

      socketIo?.on("connect_error", () => {
        // revert to classic upgrade
        // socketIo.io.opts.transports = ["polling", "websocket"];
      });
      // socketIo.emit('*',{}, ()=>{})

      socketIo.on("connect", () => {
        setConnected(true);
      });

      socketIo.on("disconnect", () => { });
      setSocket(socketIo);
    }
  }, [connected]);

  return { socket, connected };
};

export const useSocket = createSocketHook(`${REACT_APP_SOCKET_API_PROXY}`);
