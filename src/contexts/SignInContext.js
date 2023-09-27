import { createContext, useState } from "react";

export const SignInContext = createContext();

export const SignInProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <SignInContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </SignInContext.Provider>
  );
};