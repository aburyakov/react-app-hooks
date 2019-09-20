import React, {Component} from 'react';
import Header from '../../pages/Header/Header';
import Footer from '../../pages/Footer/Footer';

class Layout extends Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <main className="main container-fluid">{ this.props.children }</main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;

