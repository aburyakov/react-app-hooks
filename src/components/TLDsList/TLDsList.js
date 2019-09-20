import React from 'react';
import TLD from '../TLD/TLD';
import { useSelector } from 'react-redux'

function TLDsList()  {
  const domains = useSelector((state) => state.domain.domains)
  return (
    <React.Fragment>
    {
      domains.map((domain, index) => {
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

export default TLDsList;
