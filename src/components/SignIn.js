import React from 'react';

const SignIn = ({ handleClose }) => {
   
  return (
    <div>
      <form action="/action_page.php">
        <label for="rname">Username:</label><br/>
        <input type="text" id="rname"/>
        {/* <input type="submit" value="Enter"/> */}
        <br/>
        <label for="fborough">Password:</label><br/>
        <input type="text" id="fpassword" />
        {/* <input type="submit" value="Enter"/> */}
        <br/>
      </form>
      <br/>
      <button onClick={handleClose}>Enter</button>
    </div>
  );
};

export default SignIn;