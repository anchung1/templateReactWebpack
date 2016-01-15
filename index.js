import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { createStore, combineReducers } from 'redux';

let userReducer = function (state = {}, action) {
    console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        default:
            return state;
    }
};

let itemsReducer = function (state = [], action) {
    console.log('itemsReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        default:
            return state;
    }
};

let reducer = combineReducers({
    user: userReducer,
    items: itemsReducer
});

let store = createStore(reducer);


let setNameActionCreator = function (name) {
    return {
        type: 'SET_NAME',
        name: name
    }
}

class App extends Component {
    handleClick(e) {
        console.log('handle click');
        store.dispatch( {
            type: 'AN_ACTION'
        })
        store.dispatch(
            setNameActionCreator('joe')
        );
    }

    render() {
        return (
            <div>
                Hello App
                <button onClick={e => this.handleClick(e)}>
                    Cheech and Chong and Nick
                </button>
            </div>
        );
    }
}


let rootElement = document.getElementById('root')
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);