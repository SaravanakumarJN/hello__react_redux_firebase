import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const handleFirebaseAuth = () => {
    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        history.push("/home");
      });
  };

  return (
    <div>
      <div>
        <button onClick={handleFirebaseAuth}>Signin with Google</button>
      </div>
    </div>
  );
};

export { Signin };
