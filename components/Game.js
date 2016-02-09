import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {ajax} from '../actions';

function log(msg) {
    //console.log(msg);
}

export default class Game extends Component {

    ajaxTest() {
        console.log('in ajax test');
        ajax().getCookieID();
    }

    render() {
        console.log('Game render called', this.props.testFilter1, this.props.testFilter2);
        //console.log(this.props.tickets);
        //console.log(this.props.winningNumbers);


        return (
            <div>
                <button onClick={ () => this.props.onFilter1Click('filter1')}>Filter1</button>
                <button onClick={ () => this.props.onFilter2Click('filter2')}>Filter2</button>
            </div>
        )
    }
}

Game.propTypes = {
    onFilter1Click: PropTypes.func.isRequired,
    onFilter2Click: PropTypes.func.isRequired
};
