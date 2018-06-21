require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import Transformer from './components/Transformer';

const app = ( <Transformer />);
let el = document.getElementById('root');

if(el){
    ReactDOM.render(app, el);
}
