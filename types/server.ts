import http from "http";
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export type ItypeServer = http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
>;

export type IOserver = Server<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  any
>;

export type typeAuthBasicType = {
  phoneNumber: string;
  password: string;
};
