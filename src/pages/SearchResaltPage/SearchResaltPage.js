import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import TLDsList from '../../components/TLDsList/TLDsList';
import {NavLink} from 'react-router-dom'

function SearchResaltPage() {
  return (
    <Layout>
      Search Result Page
      <NavLink to="/home">Home Page</NavLink>
      <TLDsList></TLDsList>
    </Layout>
  );
}

export default SearchResaltPage;
