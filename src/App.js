import React from 'react';
import CardsList from './CardsList';



function App() {
  return (
   <div className="container-fluid app d-flex flex-column ">

      <h1 className="m-5">PARTICEEP'S MOVIE SELECTION</h1>

      <CardsList />

      <p className="m-2">© Margot Rasamy - 2020</p>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
