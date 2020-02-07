import React, { Component } from "react";
import { NavLink } from "reactstrap";
import { Marker, InfoWindow } from "react-google-maps";

class MarkerWithInfoWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.location = this.props.location;
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    console.log("sqdsdqsd45", this.location);
    return (
      <Marker
        onClick={this.toggle}
        position={this.location}
        title={this.location.title}
        label={this.location.label}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={this.toggle}>
            <NavLink href={this.location.www} target="_blank">
              {this.location.title}
            </NavLink>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default MarkerWithInfoWindow;
