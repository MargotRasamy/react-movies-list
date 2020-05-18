import React from 'react';
import CardsList from './CardsList';

function App() {
  return (
   <div className="container-fluid app d-flex flex-column align-items-center">

      <h1 className="m-5">PARTICEEP'S <span class="colored">movie selection</span></h1>

      <CardsList />
      
      <p className="m-2 signature">© Margot Rasamy - 2020</p>
    </div>
  );
}

export default App;
