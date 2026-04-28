export type UserRole = 'admin' | 'agent';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  avatar: string;
  password: string;
}
