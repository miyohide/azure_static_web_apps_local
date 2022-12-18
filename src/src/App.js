import { useState, useEffect } from "react";

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
    </div>
  );
}

export default App;
