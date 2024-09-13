export interface User {
  id?: number | string;
  name: string;
  email?: string;
  password?: string;
  role: 'admin' | 'gerente' | 'cliente';
}