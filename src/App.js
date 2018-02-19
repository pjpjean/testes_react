import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import DropdownSelect from 'components/DropdownSelect';
import './App.css';

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
  showSelectedItem() {

  }
  render() {
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
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
              <DropdownSelect itens={['Indicadores', '-', 'Pessoa Física', 'Pessoa Jurídica']} />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
