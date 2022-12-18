import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from './routes/Home';
import About from './routes/About';
import NoMatch from "./routes/NoMatch";

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch('/api/message')).json();
      setData(text);
    })();
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>これはAzure Static Web Appsのサンプルです。</h1>
        <p>APIからの返り値 : <b>{data}</b></p>
      </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
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
