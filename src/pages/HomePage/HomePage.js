import React from 'react';
import Layout from '../../components/Layout/Layout';
import SearchDomain from '../../containers/SearchDomain/SearchDomain';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getLoading } from '../../store/selectors/domain';

function HomePage() {
  const loading = useSelector(getLoading);
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
