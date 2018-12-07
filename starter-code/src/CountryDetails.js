import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom"

import countries from "./countries.json"

class CountryDetails extends Component {
  state = {
    countries: countries
  }
  render() {
    const details = this.state.countries.filter((country)=>{
      return (country.cca3 === this.props.match.params.countryCode)
    })

    const borders = details[0].borders.map((border)=>{
      return(
        <li><Link to={border}>{border}</Link></li>
      )
    })

    return (
      <div className="col-7">
        <h1>{details[0].name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="capital">Capital</td>
                  <td>{details[0].capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{details[0].area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {borders}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
    );
  }
}

export default CountryDetails;