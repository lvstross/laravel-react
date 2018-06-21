import React, { Component } from 'react';
import FormInput from './partials/FormInput';
import FormTextArea from './partials/FormTextArea';
import StatusMessage from './partials/StatusMessage';

/**
 * Transformer Class
 * Extends: Component
 * Renders: Html form and processes it's request
 */
class Transformer extends Component {
    /**
     * Constructor which sets super props, state and binds methods
     *
     * @param props object
     */
    constructor(props) {
        super(props);
        this.state = {
            modified: "e",
            modifier: "Hoopla!",
            text: 'The text in this box is the text to be transformed. Every instance of the "Letter To Be Transformed" is going to be transformed to the modifier next to it. Go ahead and play around with it. Only one character is allowed to be transformed at a time. Make something wacky out of it.',
            status: false,
            type: '',
            responseText: ''
        };
        // Bindings
        this.handleModified = this.handleModified.bind(this);
        this.handleModifier = this.handleModifier.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleTransform = this.handleTransform.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Sets the state of the modified state property
     *
     * @param event object
     */
    handleModified(event) {
      this.setState({modified: event.target.value});
    }

    /**
     * Sets the state of the modifier state property
     *
     * @param event object
     */
    handleModifier(event) {
      this.setState({modifier: event.target.value});
    }

    /**
     * Sets the state of the text state property
     *
     * @param event object
     */
    handleText(event) {
      this.setState({text: event.target.value});
    }

    /**
     * Makes a post request to '/transform'.
     */
    handleTransform(){
        axios({
            method: 'post',
            url: 'api/transform',
            data: this.state,
            validateStatus(status) {
                if(status >= 200 && status < 300){
                    return status;
                }else{
                    alert('Sorry something went wrong :(');
                    throw new Error('Ajax request faild with a status code of: ' + status);
                }
            }
        }).then((response) => {
            this.setState({
                status: true,
                type: response.data.type,
                responseText: response.data.responseText,
            });
        }).catch((error) => {
            throw new Error('Ajax request failed! Message: ' + error);
        });
    }

    /**
     * Handles the submition of the form. Prevents the default
     * behavior, logs the results in the console and calls the
     * handleTransform method.
     */
    handleSubmit(event) {
        console.log("Modified: ", this.state.modified);
        console.log("Modifier: ", this.state.modifier);
        console.log("Text: ", this.state.text);
        this.handleTransform();
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="form-box">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <FormInput
                                    forText="modified"
                                    labelText="Change:"
                                    length="1"
                                    value={this.state.modified}
                                    change={this.handleModified}
                                ></FormInput>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <FormInput
                                        forText="modifier"
                                        labelText="Into:"
                                        length="20"
                                        value={this.state.modifier}
                                        change={this.handleModifier}
                                ></FormInput>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <FormTextArea
                                    forText="text"
                                    labelText="Text To Be Transformed:"
                                    numRows="5"
                                    length="500"
                                    value={this.state.text}
                                    change={this.handleText}
                                ></FormTextArea>
                            </div>
                            <div className="col-sm-12">
                                <input className="btn btn-primary full-width" type="submit" value="Transform!" />
                            </div>
                        </div>
                    </form>
                    <br />
                    <StatusMessage
                        type={this.state.type}
                        status={this.state.status}
                        text={this.state.responseText}
                    ></StatusMessage>
                </div>
            </div>
        );
    }
}

export default Transformer;