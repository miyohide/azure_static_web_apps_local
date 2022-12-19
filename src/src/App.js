import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from './routes/Home';
import About from './routes/About';
import NoMatch from "./routes/NoMatch";

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
        <h1>これはAzure Static Web Appsのサンプルです。</h1>
        <p>APIからのメッセージ : <b>{message}</b></p>
        <p>User : {user?.userDetails}</p>
      </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="/.auth/login/github">GitHub Login</a>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
