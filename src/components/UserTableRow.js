import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class UserTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser() {
        axios.delete('http://localhost:4000/Users/delete-User/' + this.props.obj._id)
            .then((res) => {
                console.log('User successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.companyname}</td>
                <td>{this.props.obj.stocksymbol}</td>
                <td>{this.props.obj.marketcap}</td>
                <td>{this.props.obj.currentprice}</td>
                <td>
                    <Link className="edit-link" to={"/edit-User/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteUser} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}