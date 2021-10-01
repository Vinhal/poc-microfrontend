import React, { useRef } from "react";
import { useUserContext } from "host/UserContext";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const inputRef = useRef();
  const history = useHistory();
  const userContext = useUserContext();

  const onChangeUserName = () => {
    if (!inputRef.current.value) return;
    userContext.loadUser({
      login: "email@email.com",
      user: inputRef.current.value,
    });
  };

  return (
    <div style={{ display: "inline-grid", gridGap: "10px" }}>
      Page Dashboard from App 2 application. User: {userContext?.user?.user}
      <input placeholder="user name" ref={inputRef} />
      <button onClick={onChangeUserName}>Change Username</button>
      <button onClick={() => history.push("/")}>Go to Home</button>
    </div>
  );
}

export default Dashboard;
