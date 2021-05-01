import '../css/style.css';
import React, {Component} from "react";
import Autocomplete from './autofill.js';
var obj = {
  table: []
};
class App extends React.Component{
  componentDidMount() {
    const apiUrl = 'https://swapi.dev/api/people/?search=sky';
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        for(var i=0;i<data.results.length;i++){
     obj.table.push(data.results[i].name);}});
      console.log(obj);
      // export default obj;
  }
  render() {
    return (
      <div className="App">
        <h1>Scaler Challenge</h1>
        <hr></hr>
        <form>
        <label for="search"><b>Search Name</b></label>

        <Autocomplete options= {obj.table} />
        </form>
      </div>
    );
  }
}

export default App;