import React, { Fragment, useContext } from "react";
import Create from "../components/create/Create.jsx";
import { AuthContext } from "../contextstore/AuthContext.jsx";
import Login from "../components/login/Login.jsx";

const CreatePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <Fragment>
      {user ? (
        <Create />
      ) : (
        <>          
          {alert("You must login first")} <Login />
        </>
      )}
    </Fragment>
  );
};

export default CreatePage;