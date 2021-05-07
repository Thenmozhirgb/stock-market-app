import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UserTableRow from './UserTableRow';
import { connect } from "react-redux";
import { getHome } from "../redux/actions/userAction";


 class Home extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getHome();
      
  }

  DataTable() {
    return this.props.home ? this.props.home.map((res, i) => {
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
  return {home : state.userReducer.home};
};

const mapDispatchToProps = (dispatch) => ({
  getHome: (params) => dispatch(getHome(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
