// Importing necessary modules from React
import { createContext, useState } from "react";

// Create a new context for managing user data
export const UserContext = createContext();

// The UserProvider component provides the user context to its children
export const UserProvider = ({ children }) => {
  // State variable to store user data, initially set to null
  const [user, setUser] = useState(null);

  // Function to handle user sign-out
  const signOut = () => {
    // Implement sign-out logic here (e.g., clearing user data from context)
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, signOut }}>
      {/* Provide user-related state and functions to the children */}
      {children}
    </UserContext.Provider>
  );
};
