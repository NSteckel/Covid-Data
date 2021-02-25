import React, { Component } from 'react';
import "./directions.css";
import {withRouter} from "react-router";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from 'react-router-dom';


class Directions extends Component {
    render() {
        return(
            <div className = "styler">
                <div className = "texter">
                    <h2>Directions</h2>
                </div>
                <hr />
                    <button><Link to="/home">Home</Link></button>
                    <button><Link to="/countryInfo">More Info</Link></button>
                    <button><Link to="/directions">Directions</Link></button>
                <hr />
                <div className = "paratexter">
                    <p>
                    To start, input a country using the search bar on the home page. <br />
                    Next, click more info to see covid-19 data about that country. <br />
                    The dropdown menu can be used to see a full list of countries. 
                    </p>
                </div>
            </div>
               
            
        )
    }
}
  

    


export default Directions;