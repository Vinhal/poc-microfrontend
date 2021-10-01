import React from "react";
import { useUserContext } from "./UserContext/context";

function Welcome() {
  const userContext = useUserContext();

  return <h3> Welcome user: <small>{userContext?.user?.user}</small></h3>;
}

export default Welcome;
