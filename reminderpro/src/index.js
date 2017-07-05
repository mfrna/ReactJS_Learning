import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// Provider Provides a store for the App
// Store has access to the reducer
// Components call actions, and "connect" them
// upon "connecting" actions are available as props