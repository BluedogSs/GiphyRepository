import React, { useState } from 'react';
import './assets/css/App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route } from "wouter"
import Home from './Home/Index';



function App() {
  const [isBlack, setIsBlack] = useState(false)

  return (
    <div className="App">
      <div className={isBlack ? "App-content-black" : ""}>
        <section className="App-content" >
          <Route
            path="/">
            <Home isBlack={isBlack} setIsBlack={setIsBlack} />
          </Route>
          <Route
            component={ListOfGifs}
            path="/gif/:keyword" />

        </section>
      </div>
    </div>
  );
}

export default App;
