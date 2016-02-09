import { combineReducers } from 'redux';
import {ADD_FILTER1, ADD_FILTER2} from './actions'


function log(msg) {
    console.log(msg);
}

function testFilter1(state = [], action) {
    console.log('testFilter1 was called with state', state, 'and action', action);
    switch (action.type) {
        case ADD_FILTER1: {
            return [...state, action.data];
        }
        default:
            return state;
    }
}

function testFilter2(state = {}, action) {
    console.log('testFilter2 was called with state', state, 'and action', action);
    switch (action.type) {
        case ADD_FILTER2: {
            return action.data
        }
        default:
            return state;
    }
}


const testApp = combineReducers({
    testFilter1,
    testFilter2
});

export default testApp