import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Dropdown, DropdownMenu, DropdownToggle,
  DropdownItem, UncontrolledDropdown
} from 'reactstrap';

const propTypes = {
  itens: PropTypes.array,
};

const defaultProps = {
  itens: ['Option 1', 'Option 2', '-', 'Option 3'],
};

class DropdownSelect extends React.Component {
  constructor(props) {
    super(props);

    // Metodos
    this.select = this.select.bind(this);

    // Estado
    this.state = {
      value : this.props.itens[0],
    };
  }
  
  select(event) {
    this.setState({
      value: event.target.innerText
    });
  }
  
  render() {
    return (
      <UncontrolledDropdown>
        <DropdownToggle caret>
          {this.state.value}
        </DropdownToggle>
        <DropdownMenu>
          {dropdownItems(this.props.itens, this.select)}
        </DropdownMenu>
    </UncontrolledDropdown>
    );
  }
}

function dropdownItems(itens, clickHandler) {
  return itens.map((item) => item === '-'
    ? <DropdownItem divider /> 
    : <DropdownItem onClick={clickHandler}>{item}</DropdownItem>);
}

DropdownSelect.propTypes = propTypes;
DropdownSelect.defaultProps = defaultProps;

export default DropdownSelect
