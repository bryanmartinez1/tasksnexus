import { getAuth, signOut } from "firebase/auth";
import { firebaseAuth } from "src/config/firebase";
import { isLoggedIn } from "src/config/firebaseTypes";

export const isUserLoggedIn = () => {
  const user = getAuth().currentUser;
  return user ? ({ id: user.uid, isAuthenticated: true } as isLoggedIn) : null;
};

export const logOut = async () => {
  try {
    await signOut(firebaseAuth);
  } catch (error) {
    alert(error);
  }
};
