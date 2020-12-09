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

// Socket IO
export interface ActualMessage {
  payload: string;
}
