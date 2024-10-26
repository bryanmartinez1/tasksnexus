export const authConstants = {
  logIn: {
    name: "Log in",
  },
  signUp: {
    name: "Sign up",
  },
  logOut: {
    name: "Log out",
  },
};

export const authFormLabels = {
  email: "Email",
  username: "Username",
  password: "Password",
  confirmPassword: "Confirm password",
  firstName: "First name",
  lastName: "Last name",
  dateOfBirth: "Date of birth",
  submit: "Submit",
  haveAccount: "Have an account? Log in",
  dontHaveAccount: "Don't have an account? Sign up",
  phoneNumber: "Phone number",
  rememberMe: "Remember me",
  forgotPassword: "Forgot password?",
  termsAndConditions: "I agree to the Terms and Conditions",
  resendVerificationEmail: "Resend verification email",
  logInFail: "Failed to log in, email or password is incorrect",
  validAge: "User must be atleast 13 years old",
};

export const authPlaceHolders = {
  email: "Enter email address here",
  password: "Enter password here",
};

export const invalidPassword = {
  name: "Invalid Password",
  types: {
    dontMatch: "Password does not match",
    specialCharcater:
      "Password requires atleast one special chacater like !, @, #, $",
    number: "Password requires have one digit character (0-9)",
    notEnoughCharacters: "Password requires atleast 8 characters",
    upperCase: "Password requires atleast one uppercase chataer (A-Z)",
    lowerCase: "Password requires atleast one lowercase chataer (a-z)",
  },
};
