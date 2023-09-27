import React from 'react';
import { useContext } from 'react';
import { UserContext } from "../contexts/UserContext";

const SignIn = ({ handleClose }) => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <form action="/action_page.php">
        <label htmlFor="rname">Username:</label><br/>
        <input type="text" id="rname"/>
        {/* <input type="submit" value="Enter"/> */}
        <br/>
        <label htmlFor="fborough">Password:</label><br/>
        <input type="text" id="fpassword" />
        {/* <input type="submit" value="Enter"/> */}
        <br/>
      </form>
      <br/>
      <button onClick={handleClose}>Sign In</button>
    </div>
  );
};

export default SignIn;