// Redux store
export interface RoomInterface {
  id: number;
  name: string;
}

export interface MessageInterface {
  id: number;
  textMessage: string;
  created_at: string;
  authorName: string;
}

export interface ProfileInterface {
  id: number;
  username: string;
  age: number;
  interests: string;
  status: string;
}

export interface TokenizedPayload<T> {
  token: string;
  payload: T;
}

// JWT
export interface SignUserInterface {
  username: string;
  password: string;
}
export interface SignUpUserInterface extends SignUserInterface {
  confirmedPassword: string;
}

export interface TokenInterface {
  token: string;
}

export interface VerifyUserTokenInterface {
  jwtToken: string;
  userName: string;
}

// Socket IO - Client
export interface ClientMessage {
  payload: string;
}

export type ClientTypingMessage = ClientMessage;

// Socket IO - Server
export interface ServerMessage extends ClientMessage {
  username: string;
}

export interface RoomEventMessage {
  userIds: number[];
}

export interface TypingEventMessage {
  typings: Typing[];
}
export interface Typing {
  id: number;
  timestamp: number;
  roomId: number;
  userId: number;
}
