import React, { useContext, useState } from 'react';
import { UserContext } from "../contexts/UserContext";

const SignIn = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInMessage, setSignInMessage] = useState(''); // Initialize the sign-in message state
    const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = async () => {
    // Send a POST request to your backend with email and password
    try {
      const response = await fetch("http://localhost:8080/customers/verification", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Check if the response contains a customer object or is null
        if (data) {
          // Set the user object in context
          setUser(data);
          setSignedIn(true);
          // Update the sign-in message
          setSignInMessage(`${data.email} is signed in`);
        } else {
          // Handle incorrect login details
          // You can show an error message to the user
          setSignInMessage('Incorrect login details');
        }
      } else {
        // Handle other errors
        // You can show an error message to the user
        setSignInMessage('Incorrect login details');
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error occurred", error);
      setSignInMessage('Network error occurred');
    }
  };

  return (
    <>
    <div hidden={signedIn === true}>
      <label htmlFor="email">Email:</label><br />
      <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <label htmlFor="password">Password:</label><br />
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
    {/* Display the sign-in message */}
    <p>{signInMessage}</p>
    </>
  );
};

export default SignIn;
