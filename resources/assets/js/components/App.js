import React, { Component } from 'react';

/**
 * Transformer Class
 * Extends: Component
 * Renders: Html form and processes it's request
 */
class App extends Component {
    /**
     * Constructor which sets super props, state and binds methods
     *
     * @param props object
     */
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello! I'm a React app set up for laravel!",
        };
    }

    render() {
        return (
            <div className="container">
                <p className="text-center">{this.state.message}</p>
            </div>
        );
    }
}

export default App;