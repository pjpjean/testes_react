import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
                <InputGroupButtonDropdown>
                <DropdownToggle nav caret>
                  Options
                  </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                    </DropdownItem>
                  <DropdownItem>
                    Option 2
                    </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                    </DropdownItem>
                </DropdownMenu>
                </InputGroupButtonDropdown>
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
                <DropdownSelect nav itens={itensBusca} />
                <Input placeholder="username" />
              </InputGroup>              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
