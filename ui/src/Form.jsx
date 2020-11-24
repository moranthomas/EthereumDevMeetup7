/*jshint esversion: 6 */
import React, { Component } from 'react'

export class Form extends Component {


    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('This amount of DAI was depoisted : ' + this.state.value);
        event.preventDefault();
    }


    render() {
        const inputStyle = { padding: '5px', margin: '30px' };
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label > Deposit DAI:
                    <input style={inputStyle} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

export default Form
