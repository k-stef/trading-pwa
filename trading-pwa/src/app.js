// This file serves as the entry point of the application. It initializes the app, sets up event listeners, and renders the main components.

import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';
import './styles/main.css';

const App = () => {
    return (
        <div className="app">
            <h1>Trading Calculator</h1>
            <Calculator />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));