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
export interface SignUpUserInterface {
  username: string;
  password: string;
}

export interface SignInUserInterface {
  username: string;
  password: string;
}

// Socket IO
export interface ActualMessage {
  payload: string;
}
