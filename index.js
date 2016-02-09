import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import testApp from './reducers'

let store = createStore(testApp)

let rootElement = document.getElementById('root')
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)