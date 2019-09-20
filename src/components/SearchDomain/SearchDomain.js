import React, { useState, useCallback } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchDomain } from '../../store/actions/domain'

function SearchDomain(props) {
  const dispatch = useDispatch();
  const [domain, setDomain] = useState('');
  const [toResultPage, setToResultPage] = useState(false);
  const search = useCallback(
    () => {
      let result = dispatch(searchDomain(domain));
      result.then(data => {
        setToResultPage(true);
      }).catch(() => {
        console.log('catch');
      });
    },
    [dispatch, searchDomain, setToResultPage, domain]
  );

  const changeHandler = (event) => {
    setDomain(event.target.value);
  }

  if (toResultPage === true) {
    return <Redirect to='/searchResult' />
  }
  return (
    <React.Fragment>
      <Input 
        value={domain}
        onChange={changeHandler} 
        placeholder="Search domain name"
      />
      <Button clickHandler={search} classes="btn-outline-secondary">Search</Button>
    </React.Fragment>
  );
}

export default SearchDomain;
