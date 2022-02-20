import React, { Component }  from 'react';
import NewsFeed from './components/NewsFeed';
import CurrencyConverter from './components/CurrencyConverter';


function App() {
  return (
    
      <div className="app">
      <NewsFeed />
      <CurrencyConverter />
      </div>
  );
}

export default App;
