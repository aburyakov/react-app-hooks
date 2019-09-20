import React from 'react';
import Header from '../../pages/Header/Header';
import Footer from '../../pages/Footer/Footer';

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <main className="main container-fluid">{ props.children }</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;

