export interface isLoggedIn {
  id: string;
  isAuthenticated: boolean;
}

export type AuthStatus = isLoggedIn | null;

export interface LoggedInUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
}

export type User = LoggedInUser | null;
