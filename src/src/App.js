import { useState, useEffect } from "react";
import NavBar from "./NavBar";

function App() {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo();
    getMessage();
  }, []);

  async function getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;

      if (clientPrincipal) {
        setUser(clientPrincipal);
        console.log(`clientPrincipal = ${JSON.stringify(clientPrincipal)}`);
      }
    } catch (error) {
      console.error('No profile could be found ' + error?.message?.toString());
    }
  }

  async function getMessage() {
    const { text } = await( await fetch('/api/message')).json();
    setMessage(text);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar user={user} />
      </header>
      <main>
        <h1>これはAzure Static Web Appsのサンプルです。</h1>
        <p>APIからのメッセージ : <b>{message}</b></p>
      </main>
    </div>
  );
}

export default App;
