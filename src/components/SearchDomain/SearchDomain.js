import React, { useState, useCallback } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchDomain } from '../../store/actions/domain'

function SearchDomain() {
  const dispatch = useDispatch();
  const [domain, setDomain] = useState('');
  const [toResultPage, setToResultPage] = useState(false);
  
  //When passing a callback using dispatch to a child component, it is recommended to memoize it with useCallback
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
      <Button onClick={search} className="btn btn-outline-secondary">Search</Button>
    </React.Fragment>
  );
}

export default SearchDomain;
