export interface LoggedInUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
}

export type User = LoggedInUser | null;
