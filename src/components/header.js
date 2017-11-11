import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button, Nav, NavItem } from 'react-bootstrap';
class Header extends Component { 
    handleChange(e){
        var val = e.target.value;
        this.props.filter(val);
    }
    render(){
        return(
        <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Recipe APP FCC</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                <Navbar.Form>
                    <FormGroup>
                    <FormControl type="text" placeholder="Search" onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                </Navbar.Form>
                </Nav>

                <ul className="nav navbar-nav">
                    <li><a href="https://github.com/endzi007/recipeApp"><i className="fa fa-github fa-lg" aria-hidden="true"></i> Github repository</a></li>
                    <li><a href="https://linkedin.com/in/enis-jašarović-2b9794132"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i> linkedIn</a></li>
                    <li><a href="https://enis-jasarovic.com"><i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i> My Portfolio</a></li>
                </ul> 
               
            </Navbar.Collapse>
        </Navbar>        
        );
    }  
}

export default Header;