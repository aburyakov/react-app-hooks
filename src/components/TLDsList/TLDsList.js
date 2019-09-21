import React from 'react';
import TLD from '../TLD/TLD';
import { useSelector } from 'react-redux'
import { getAllDomains } from '../../store/selectors/domain';

function TLDsList()  {
  const domains = useSelector(getAllDomains)
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
