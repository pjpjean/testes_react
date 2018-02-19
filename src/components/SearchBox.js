import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Caixa de busca filtrável.
 * A caixa de busca se utiliza de um 'DropdownSelect' para definir o contexto
 * e o roteamento da busca. Via props, recebe um array de definições de busca
 * com os itens que vão aparecer no DropdownSelect e as URLs que vão ser acionadas
 * de acordo com o item selecionado.
 */
class SearchBox extends Component {

  /**
   * Construtor.
   * @param {Object} props - Ver 'propTypes' abaixo.
   */
  constructor(props) {
    // Chamada obrigatória ao construtor superior
    super(props);

    // Vinculação dos métodos à instância
    // this.handleSelect = this.handleSelect.bind(this);

    // Estado inicial
    this.state = {
      selectedItem: 0,
      queryString: "",
    };
  }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const propTypes = {
  itens: PropTypes.array,
};

const defaultProps = {
  itens: ['Option 1', 'Option 2', '-', 'Option 3'],
};


export default SearchBox;