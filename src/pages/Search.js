import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchName from "../components/SearchName/SearchName";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        search: "",
        employees: "",
        results: [],
        error: ""
    };

// When the component mounts, get a list of all the available employees and update this.state.employees
componentDidMount() {
    API.getBaseEmployeesList()
    .then(res => this.ListeningStateChangedEvent({ employees: res.data.message }))
    .catch(err => console.log(err));
}

handleInputChange = event => {
    this.setState({ search: event.target.value });
};

handleFormSubmit = event => {
    event.preventDefault();
    API.getEmployeeofEmployees(this.state.search)
    .then(res => {
        if (res.data.status === "error") {
            throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
    })
    .catch(err => this.setState({ error: err.message }));
    };
    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <h1 className="text-center">Search for an Employee!</h1>
                    <SearchForm
                    handleFormSubmmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    employees={this.state.employees}
                    />
                    <SearchResults results={this.state.results} />
                </Container>
            </div>
        );
    }
}

export default Search;