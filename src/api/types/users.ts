export interface UsersDTO {
  users: UserDTO[];
  total: number;
  skip: number;
  limit: number;
}

interface UserDTO {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: 'male' | 'female';
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  role: 'admin' | 'moderator' | 'user';
}
