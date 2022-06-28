import type { DocumentData } from "firebase/firestore";

export const useAuth  = (user: DocumentData | undefined) => {
  console.log("USER: ", user);
  return user;
}
