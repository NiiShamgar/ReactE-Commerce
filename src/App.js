import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Sidebar from './components/Sidebar';
import Main from './components/Main';


function App() {
  return (
      <div class="container">
        <div class="row" style={{padding: "10px"}}>
          <div class="col-2">
            <Sidebar/>
          </div>
          <div class="col-10">
            <Main/>
          </div>

          </div>
        </div>

  );
}

export default App;
