import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const SignIn = () => {
  const { user, setUser, signOut } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInMessage, setSignInMessage] = useState(""); // Initialize the sign-in message state

  let orders;

  if (user != null) {
    orders = user.orders.map((order) => {
      return (
        <li>
          Order {order.id}:
          <ul>
            {order.orderProducts.map((product) => {
              return (
                <li>
                  {product.quantity} x {product.product.name}
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
  }

  const handleSignIn = async () => {
    // Send a POST request to your backend with email and password
    try {
      const response = await fetch(
        "http://localhost:8080/customers/verification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Check if the response contains a customer object or is null
        if (data) {
          // Set the user object in context
          setUser(data);
          // Update the sign-in message
          setSignInMessage(`${data.email} is signed in`);
        } else {
          // Handle incorrect login details
          // You can show an error message to the user
          setSignInMessage("Incorrect login details");
        }
      } else {
        // Handle other errors
        // You can show an error message to the user
        setSignInMessage("Incorrect login details");
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error occurred", error);
      setSignInMessage("Network error occurred");
    }
  };
  // signin Modal
  return (
    <>
      {user ? (
        // User is signed in, display sign-out button
        <div>
          <p>{`Signed in as: ${user.email}`}</p>
          <hr />
          <h4>Orders:</h4>
          <ul>{orders}</ul>

          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        // User is not signed in, display sign-in modal
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleSignIn}>Sign In</button>
          <p>{signInMessage}</p>
        </div>
      )}
    </>
  );
};

export default SignIn;
