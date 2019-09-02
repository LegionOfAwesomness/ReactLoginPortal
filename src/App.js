import React, { Component } from 'react';
import { selectUser } from './actions';

import { BrowserRouter } from 'react-router-dom';
import RenderPage from "./components/RenderPage";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
       <div className="App">
           <RenderPage />
           </div>
     </BrowserRouter>
    );
  }
}

export default App;
