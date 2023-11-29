import React from 'react';
import './App.css';
import hi from './img/hi.png';
import Button from 'react-bootstrap/Button';

function App() {
  return (
<div className="App">
      <div className="container">
      <header className="App-header">
       <h1>Quizz</h1>
       <h1>Welcome</h1>
       <img src={hi} className="hi" alt="hi" />
       <div>
       <Button variant="primary">Primary</Button>{' '}
       </div>
      </header>

      <footer>
        <hr />
        <a href="https://github.com/gltats/quizz_app"
         target="_blank" rel="noreferrer">
          Open-source code
        </a>
          {" "}by Wolfguard Cyberclub && AI Club
      </footer>
      </div>
    </div>
  );
}

export default App;
