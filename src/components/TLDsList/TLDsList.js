import React, {Component} from 'react';
import TLD from '../TLD/TLD';
import {connect} from 'react-redux'

class TLDsList extends Component {

  constructor(proprs) {
    super();
  }


  render () {
    return (
      <React.Fragment>
      {
        this.props.domains.map((domain, index) => {
          return (
            <TLD
              key={index}
              domain={domain.name}
            ></TLD>
          )
        })
      }
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
    return {
      domains: state.domain.domains
    }
}

export default connect(mapStateToProps, null)(TLDsList);
