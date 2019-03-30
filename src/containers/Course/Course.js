import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Course extends Component {

    state = {
        title: ''
    }

    componentDidMount() {
        this.parseQueryParams()
    }

    parseQueryParams = () => {
        const query = new URLSearchParams(this.props.location.search)
        for (let param of query.entries()) {
            this.setState({ title: param[1] })
        }
    }

    render() {
        return (
            <div>
                <h1>Title: {this.state.title}</h1>
                <p>You selected the Course with ID:{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);