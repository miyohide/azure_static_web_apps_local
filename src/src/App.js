import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

function App() {
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo();
    getMessage();
    getMessage2();
  }, []);

  async function getUserInfo() {
    try {
      const response = await fetch("/.auth/me");
      const payload = await response.json();
      const { clientPrincipal } = payload;

      if (clientPrincipal) {
        setUser(clientPrincipal);
        console.log(`clientPrincipal = ${JSON.stringify(clientPrincipal)}`);
      }
    } catch (error) {
      console.error("No profile could be found " + error?.message?.toString());
    }
  }

  async function getMessage() {
    const { text } = await (await fetch("/api/message")).json();
    setMessage(text);
  }

  async function getMessage2() {
    const { text } = await (await fetch("/api/message2")).json();
    setMessage2(text);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar user={user} />
      </header>
      <main>
        <h1>これはAzure Static Web Appsのサンプルです。</h1>
        <p>
          APIからのメッセージ : <b>{message}</b>
        </p>
        <p>
          APIからのメッセージ その2 : <b>{message2}</b>
        </p>
      </main>
    </div>
  );
}

export default App;
