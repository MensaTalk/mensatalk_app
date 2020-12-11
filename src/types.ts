export interface RoomInterface {
  id: number;
  name: string;
}

export interface MessageInterface {
  id: number;
  textMessage: string;
  created_at: string;
}

// JWT
export interface SignUserInterface {
  username: string;
  password: string;
}
export interface TokenInterface {
  token: string;
}

// Socket IO
export interface ClientMessage {
  payload: string;
}

export interface ServerMessage extends ClientMessage {
  username: string;
}
