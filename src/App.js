import React, { Component } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  Input
} from 'reactstrap';
import DropdownSelect from 'components/DropdownSelect';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import './App.css';
import * as data from "_mocks_/data.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isNavbarOpen: true
    };
  }
  toggleNavbar() {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen
    });
  }
  render() {
    const itensBusca = data.itensBusca.map(
      (item) => item.nome
    );

    return (
      <div>
        <Navbar dark color="dark" expand="md">
          <NavbarBrand className="mr-md-5" href="/">
            <strong>Reputação</strong>          
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.isNavbarOpen} navbar>
            <InputGroup className="py-2 py-md-0">
              <DropdownSelect addonType="prepend" itens={itensBusca} />
              <Input placeholder="username" />
              <Button addonType="append">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup>
            <Nav navbar className="text-nowrap ml-md-5">
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
