import { useState } from "react";

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function UserGreeting() {
  return <h1>Welcome back</h1>;
}

function LoginButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Login
    </button>
  );
}

function LogoutButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Logout
    </button>
  );
}

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <div style={{ margin: "40px" }}>

      <Greeting isLoggedIn={isLoggedIn} />

      <br />

      {isLoggedIn ? (

        <LogoutButton
          onClick={() => setIsLoggedIn(false)}
        />

      ) : (

        <LoginButton
          onClick={() => setIsLoggedIn(true)}
        />

      )}

    </div>

  );

}

export default App;