import React, { Component } from 'react';
import "./home.css";
import {withRouter} from "react-router";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from 'react-router-dom';


class Home extends Component {
    //Use stuff/framework from ResultSection
    //data and hasResult = defined in ResultSection, but not in here 

    render() {
    
        return (
            <div>
                <div className="texter">
                <h2>Home</h2>
                </div>
                <hr />
                <div class="buttonize changebutton">
                    <button><Link to="/home">Home</Link></button>
                    <button><Link to="/countryInfo">More Info</Link></button>
                    <button><Link to="/directions">Directions</Link></button>
                </div>
                <hr />
               
           
            </div>
          
        )
    }
}

export default Home;