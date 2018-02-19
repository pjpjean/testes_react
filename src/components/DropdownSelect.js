import React from 'react';
import PropTypes from 'prop-types';
import {
  UncontrolledDropdown,
  UncontrolledNavDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from 'reactstrap';

/**
 * Botão que simula uma caixa de seleção.
 * Um clique no botão faz descer uma lista de opções (dropdown). Um clique
 * em qualquer um dos itens da lista, altera o texto do botão e fecha
 * a lista.
 */
class DropdownSelect extends React.Component {

  /**
   * Construtor.
   * @param {Object} props - Ver 'propTypes' abaixo.
   */
  constructor(props) {
    // Chamada obrigatória ao construtor superior
    super(props);

    // Vinculação dos métodos à instância
    this.handleSelect = this.handleSelect.bind(this);

    // Estado inicial
    this.state = {
      value: this.props.itens[0],
    };
  }

  /**
   * Trata a seleção de um item da lista.
   * Apenas atualiza o estado com o texto do item clicado. O restante é
   * feito pelos componentes inferiores.
   * @param {SyntheticEvent} event 
   */
  handleSelect(event) {
    this.setState({
      value: event.target.innerText
    });
  }

  /**
   * UI do objeto.
   */
  render() {
    const {itens, ...props} = this.props;

    // Monta a lista de itens antes (apenas por questão de legibilidade)
    const dropdownItems = itens.map(
      (item) => item === '-'
        ? <DropdownItem divider />
        : <DropdownItem onClick={this.handleSelect}>{item}</DropdownItem>
    );

    return (
      <UncontrolledDropdown>
        <DropdownToggle nav caret>
          {this.state.value}
        </DropdownToggle>
        <DropdownMenu>
          {dropdownItems}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

/**
 * Propriedades recebidas via props
 * @prop itens - Array com os itens da lista de opções
 */
DropdownSelect.propTypes = {
  itens: PropTypes.array,
};
DropdownSelect.defaultProps = {
  itens: ['Option 1', 'Option 2', '-', 'Option 3'],
};

export default DropdownSelect
