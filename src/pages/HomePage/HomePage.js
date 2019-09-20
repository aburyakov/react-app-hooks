import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import SearchDomain from '../../components/SearchDomain/SearchDomain';
import Loader from 'react-loader-spinner'
import { useSelector } from 'react-redux'

function HomePage() {
  const loading = useSelector((state) => state.domain.loading);
  return (
    <Layout>
      Home Page
      <SearchDomain></SearchDomain>
      { 
        loading ? <Loader type="ThreeDots"></Loader> : null
      }
    </Layout>
  );
}

export default HomePage;
