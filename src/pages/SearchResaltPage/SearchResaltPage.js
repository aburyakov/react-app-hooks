import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import TLDsList from '../../components/TLDsList/TLDsList';
import { NavLink } from 'react-router-dom';
import Cart from "../../components/Cart/Cart";

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
