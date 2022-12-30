import React from 'react';

import Mysap from './components/Mynew';
import './App.css';
import Greet from './components/Greet';
// import ViewPage from './components/View';


import UseEffectOne from './components/hooks/UseEffectOne';
import UseEffectTwo from './components/hooks/UseEffectTwo';
import DataFetchAxios from './components/hooks/DataFetchAxios';
import DataFetchThee from './components/hooks/DataFetchThee';
import DataAxiosThree from './components/hooks/DataAxiosThree';
import UseEffectFour from './components/hooks/UseEffectFour';
import AxiosCodeCamp from './components/hooks/AxiosCodeCamp';
import ContextHook from './components/hooks/ContextHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <Mysap/> */}
        {/* <Greet/>   */}
        {/* <ViewPage/> */}
        
               {/* The Header page - React */}

               {/* <UseEffectOne /> */}
               {/* <UseEffectTwo /> */}
              {/* <DataFetchAxios /> */}
              {/* <DataFetchThee /> */}
            {/* <DataAxiosThree /> */}
            {/* <UseEffectFour />  */}
            {/* <AxiosCodeCamp /> */}
            <ContextHook />



      </header>
      
    </div>
  );
}

export default App;
