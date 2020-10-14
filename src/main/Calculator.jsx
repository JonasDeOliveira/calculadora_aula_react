import React, { Component } from 'react';
import './calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

// const initialState = {
//     displayValue: '0',
//     clearDisplay: false,
//     operation: null,
//     values: [0, 0],
//     current: 0
// }

export default class Calculator extends Component {

    // state = { ...initialState}

    state = {
        displayValue: '0',
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0
    }

    clearMemory = () => {

    }

    setOperation = () => {

    }

    addDigit = () => {

    }

    render() {

    }
}