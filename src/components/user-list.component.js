import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UserTableRow from './UserTableRow';
import { connect } from "react-redux";
import { getUserList } from "../redux/actions/userAction";


 class UserList extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUserList();
      
  }

  DataTable() {
    return this.props.userList ? this.props.userList.map((res, i) => {
      return <UserTableRow obj={res} key={i} />;
    }): '';
  }

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Stock Symbol</th>
            <th>Market Cap</th>
            <th>Current Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}

const mapStateToProps = state =>{
  return {userList : state.userReducer.userList};
};

const mapDispatchToProps = (dispatch) => ({
  getUserList: (params) => dispatch(getUserList(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserList);