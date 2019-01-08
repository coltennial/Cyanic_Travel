import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

class Locations extends Component {
  state = { locations: [], };

  componentDidMount() {
    axios.get(`/api/locations`)
      .then(res => {
        this.setState({ locations: res.data })
      })
      .catch( err => {
        debugger
      })
  }
  // FINISH THIS TO VIEW INDIVIDUAL LOCATIONS
  renderLocations = () => {
    return this.state.locations.map( l => (
      <div key={l.id}>
        <h2>{l.name}</h2>
        <p>{l.days}</p>
        <Link to={`/locations/${l.id}`}>
          View Location
        </Link>
      </div>
    ))
  }

  render() {
    return (
      <div>
        <h2>Locations</h2>
        <div>
          {this.renderLocations()}
        </div>
      </div>
    )
  }
}

export default Locations;
