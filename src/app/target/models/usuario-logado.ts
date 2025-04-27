export interface UsuarioLogado {
  userId: number;
  name: string;
  email: string;
  lastLogin: Date;
  token: string;
  expiresIn: number;
}
