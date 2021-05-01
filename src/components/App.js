import '../css/style.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Scaler Challenge</h1>
      <hr></hr>
      <form>
      <label for="search"><b>Search Name</b></label>
       <input type="text" id="search" name="searchNames" placeholder="Type the name"></input>
      </form>
    </div>
  );
}

export default App;