import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
class Header extends Component { 
    handleChange(e){
        var val = e.target.value;
        this.props.filter(val);
    }
    render(){
        return(
            <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#" target="_blank">Endzi 007</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Form pullLeft>
                <FormGroup>
                  <FormControl type="text" placeholder="Search" onChange={this.handleChange.bind(this)}/>
                </FormGroup>
                {' '}
                <Button type="submit" bsStyle="info">Submit</Button>
              </Navbar.Form>
            </Navbar.Collapse>
          </Navbar>        );
    }  
}

export default Header;