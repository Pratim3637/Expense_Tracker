import Head from './components/Head';
import React from 'react';
import Balance from './components/Balance';
import Incom from './components/Incom';
import './App.css';
import TransacationList from './components/TransacationList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
    <GlobalProvider>
      <Head></Head>
      <div className="container">
      <Balance/>
      <Incom/>
      <TransacationList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
    
    </>
  );
}

export default App;
