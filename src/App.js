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
  InputGroupAddon,
  Input
} from 'reactstrap';
import DropdownSelect from 'components/DropdownSelect';
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
          <NavbarBrand href="/">
            {/* TODO: Incluir o ícone da estrela
              <i className="glyphicon glyphicon-star mr-2"></i> 
            */}
            <strong>Reputação</strong>          
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.isNavbarOpen} navbar>
            <Nav className="ml-auto" navbar>
              <InputGroup>
                <DropdownSelect addonType="prepend" color="secondary" itens={itensBusca} />
                <Input placeholder="username" />
                <InputGroupAddon addonType="append">@</InputGroupAddon>
              </InputGroup>              
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
              <InputGroup>
                <DropdownSelect color="secondary" itens={itensBusca} />
                <Input placeholder="username" />
                <Button addonType="append">@</Button>
              </InputGroup>              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
