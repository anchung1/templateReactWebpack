import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Game from '../components/Game'
import {addFilter1, addFilter2} from '../actions'

class App extends Component {
    render() {
        // Injected by connect() call:
        const { dispatch, testFilter1, testFilter2} = this.props;
        return (
            <div>
                <Game
                   testFilter1 = {testFilter1}
                   testFilter2 = {testFilter2}
                   onFilter1Click = {
                        (text) => {dispatch(addFilter1(text))}
                   }
                   onFilter2Click = {
                        (text) => {dispatch(addFilter2(text))}
                   }
                />
            </div>
        )
    }
}


// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        testFilter1: state.testFilter1,
        testFilter2: state.testFilter2
    }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)