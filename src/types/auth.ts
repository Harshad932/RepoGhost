export interface UserResponse {
  id: string; // UUID
  githubId: number;
  githubUsername: string;
  displayName: string;
  avatarUrl: string | null;
}

export type Theme = 'light' | 'dark' | 'system';

export interface AuthContextType {
  user: UserResponse | null;
  loading: boolean;
  error: string | null;
  login: () => void;
  logout: () => Promise<void>;
  checkAuth: () => Promise<boolean>;
}
