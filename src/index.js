import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MainLayout from './MainLayout/MainLayout';
import SuperApp from './SuperApp';
import store from './redux/store';

ReactDOM.render(<Provider store={store}><SuperApp /></Provider>, document.getElementById('root'));

