import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from  'react-redux';
import { createStore }  from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reducers from './reducers';

/**
 *  added  provider to include redux  1-sept-19
 */
ReactDOM.render(
<Provider store={createStore(reducers)}>
<App />        
</Provider>,
 document.getElementById('root')
 );
