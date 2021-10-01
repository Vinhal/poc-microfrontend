import { createContext, useContext } from "react";

const context = createContext();

context.displayName = "UserContext";

function useUserContext() {
  const userContext = useContext(context);

  console.log("useUserContext", userContext);

  return userContext;
}

export { useUserContext };
export default context;
