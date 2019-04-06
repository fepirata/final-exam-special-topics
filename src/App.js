import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResultList from './components/Results';

class App extends Component {

  state = {
    inputTerm: "coffee",
    inputCategory: "food",
    inputCityLocation: "vancouver",
    dataResult: null,
  };

  getResults = async event => {
    event.preventDefault();

    let dataResult = null;
    

    console.log("working...");

    var apiKey = "mVkI8cJKHAw2u_3H9vqxhfB4JhECH--tFRQwzTsnQQLYBCE4fL5T3DOwestN0YkJanJH-NWvQXxmGzbbnqC3dqc-TmxWBrNSgqPHzKUlOfurk00IxzhgNcZ3IlimXHYx";
    
    const data = await fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=${this.state.inputTerm}&categories=${this.state.inputCategory}&location=${this.state.inputCityLocation}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => response.json())
        .then(json => {
            return dataResult = json;
        })


      console.log(dataResult.businesses)
      
      this.state.dataResult = dataResult.businesses;
      this.setState({
        state: this.state
      });


    
  };
  updateInputTerm = event => {
    this.setState({
      inputTerm: event.target.value
    });
  };
  updateInputCategory = event => {
    this.setState({
      inputCategory: event.target.value
    });
  };
  updateInputCityLocation = event => {
    this.setState({
      inputCityLocation: event.target.value
    });
  };
  render() {
    return (
      <div>
        <header>
          <form>
            <input type="text" placeholder="Search Term Input" value={this.state.inputTerm} onChange={this.updateInputTerm}/><br/>
            <input type="text" placeholder="Categories Input" value={this.state.inputCategory} onChange={this.updateInputCategory}/><br />
            <input type="text" placeholder="City/Location Input" value={this.state.inputCityLocation} onChange={this.updateInputCityLocation}/><br />
            <input type="submit" value="submit" onClick={this.getResults} />
          </form>
        </header>
        {this.state.dataResult && <ResultList dataResult={this.state.dataResult} />}
        
      </div>
    );
  }
}

export default App;
