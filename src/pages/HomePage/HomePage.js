import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import SearchDomain from '../../components/SearchDomain/SearchDomain';
import Loader from 'react-loader-spinner'
import {connect} from 'react-redux'

class HomePage extends Component {
  render () {
    return (
      <Layout>
        Home Page
        <SearchDomain></SearchDomain>
        { 
          this.props.loading ? <Loader type="ThreeDots"></Loader> : null
        }
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.domain.loading
  }
}

export default connect(mapStateToProps, null)(HomePage);
