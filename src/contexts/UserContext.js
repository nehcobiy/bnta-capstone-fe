// UserContext.js
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signOut = () => {
    // Implement sign-out logic here (e.g., clearing user data from context)
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, signOut }}>
      {children}
    </UserContext.Provider>
  );
};
