import pawLogo from './assets/paw1.png';

import './App.css';

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={pawLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fetch a pee I</h1>

      <div className="card">
        <button>Start</button>
      </div>
      <p className="read-the-docs">Best website for your dog</p>
    </>
  );
}

export default App;
