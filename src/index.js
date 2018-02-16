import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import DropdownSelect from './DropdownSelect';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <DropdownSelect itens={['Indicadores', '-', 'Pessoa Física', 'Pessoa Jurídica']} />,
    document.getElementById('root')
);
registerServiceWorker();
