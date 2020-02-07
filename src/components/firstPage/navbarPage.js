import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import PopLogin from './PopLogin';
import PopRegister from './PopRegister';

// import ButtonPage from "./button";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color='default-color' dark expand='md'>
          <MDBNavbarBrand>
            <strong className='white-text'>Med-finder</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              {/* <ButtonPage text={"log in"} /> */}
              <PopLogin />
              <PopRegister />
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default  NavbarPage;
