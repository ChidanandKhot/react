import React from 'react';

import Mysap from './Mynew';
import './App.css';
import Greet from './Greet';
import ViewPage from './components/View';
// import './nav.css';
import './FirstNav.css';
import FirstNav from './components/FirstNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstNav/>
        <Mysap/>
        <Greet/>
        <ViewPage/>
     
       The Header page - React
       

      </header>
      
    </div>
  );
}

export default App;
