import React, { Component } from "react";

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }

    onInputChange = (event) => {
        let term = event.target.value;
        this.setState({ term });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form 
                className="input-group"
                onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Get a five-day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-button">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}