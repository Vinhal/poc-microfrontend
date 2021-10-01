import React from "react";
import { useUserContext } from "host/UserContext";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const userContext = useUserContext();

  return (
    <div style={{ display: "inline-grid", gridGap: "10px" }}>
      Page Home from App 1 application. User: {userContext?.user?.user}
      <button onClick={() => history.push("/dashboard")}>
        Go to Dashboard
      </button>
    </div>
  );
}

export default Home;
