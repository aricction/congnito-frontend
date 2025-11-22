export interface AuthResponse {
  status: string;
  message: string;
  data?: {
    user: {
      id: string;
      email: string;
      name?: string;
    };
  } | null;
}
