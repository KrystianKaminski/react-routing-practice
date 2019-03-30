import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Course extends Component {

    state = {
        title: ''
    }

    // componentDidMount() {
    //     this.parseQueryParams()
    // }

    // parseQueryParams = () => {
    //     const query = new URLSearchParams(this.props.location.search)
    //     for (let param of query.entries()) {
    //         console.log(param)
    //     }
    // }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Title: {this.props.match.params.title}</h1>
                <p>You selected the Course with ID:{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);