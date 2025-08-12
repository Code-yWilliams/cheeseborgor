export interface User {
  id: number;
  avatarUrl: string;
  name: string;
  username: string;
}

export interface CurrentUser extends User {}
