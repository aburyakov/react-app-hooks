import React from 'react';
import Header from '../../pages/Header/Header';
import Footer from '../../pages/Footer/Footer';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main className="main container-fluid">{ children }</main>
      <Footer />
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

