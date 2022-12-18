import { useState, useEffect } from "react";
import Home from './routes/Home';
import About from './routes/About';

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
      <Home />
      <About />
    </div>
  );
}

export default App;
