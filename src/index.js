import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainLayout from './MainLayout/MainLayout';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(<Provider store={store}><MainLayout /></Provider>, document.getElementById('root'));

