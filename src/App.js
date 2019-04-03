import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/navBar/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
      </div>
    );
  }
}

export default App;
