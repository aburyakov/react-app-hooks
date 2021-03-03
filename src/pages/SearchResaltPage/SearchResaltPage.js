import React from 'react';
import Layout from '../../components/Layout/Layout';
import TLDsList from '../../containers/TLDsList/TLDsList';
import { NavLink } from 'react-router-dom';
import Cart from "../../containers/Cart/Cart";

function SearchResaltPage() {
  return (
    <Layout>
      Search Result Page
      <NavLink to="/home">Home Page</NavLink>
      <Cart></Cart>
      <TLDsList></TLDsList>
    </Layout>
  );
}

export default SearchResaltPage;
