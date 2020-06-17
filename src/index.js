/**
 * @file index.js
 * @description 项目初始化入口
 */

import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Store from './store';

import './assets/style/index.less';
require('./assets/svg');

ReactDOM.render(
    <App store={new Store()}/>,
    document.getElementById('app')
);