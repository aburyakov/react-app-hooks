import React, {Component} from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {searchDomain} from '../../store/actions/domain'

class SearchDomain extends Component {

  constructor(proprs) {
    super();
    this.state = {
      domain: '',
      toResultPage: false
    }
  }

  searchDomain() {
    let result = this.props.searchDomain(this.state.domain);
    result.then(data => {
      this.setState(() => ({
        toResultPage: true
      }))
    }).catch(() => {
      console.log('catch');
    });
  }

  changeHandler = (event) => {
    const domain = event.target.value;
    this.setState((state, props) => ({
      domain
    }));
  }

  clickHandler = () => {
    this.searchDomain(this.state.domain);
  }

  render () {
    if (this.state.toResultPage === true) {
      return <Redirect to='/searchResult' />
    }
    return (
      <React.Fragment>
        <Input 
          value={this.state.domain}
          onChange={this.changeHandler} 
          placeholder="Search domain name"
        />
        <Button clickHandler={this.clickHandler} classes="btn-outline-secondary">Search</Button>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchDomain: (domain) => dispatch(searchDomain(domain))
  }
}

export default connect(null, mapDispatchToProps)(SearchDomain);
