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

// Socket IO
export interface ClientMessage {
  payload: string;
}

export interface ServerMessage extends ClientMessage {
  username: string;
}

export interface TokenizedPayload<T> {
  token: string;
  payload: T;
}
export interface RoomEventMessage {
  userIds: number[];
}
