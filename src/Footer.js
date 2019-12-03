import React from 'react';

const styles = {
  link: { 
    cursor: 'pointer', 
    color: '#006188',
    marginLeft: '5px',
    marginRight: '5px',
    padding: '20px 10px'
  }
};

const filterLink = (current, name, setFilter) => { 
  if (current === name)
    return <span>{name}</span>
  else
    return <span style={styles.link} onClick={() => setFilter(name) }>{name}</span>
};

const Footer = ({ filter, setFilter }) => (
  <div>
    { ['All', 'Not Bought', 'Bought'].map( f => filterLink(filter, f, setFilter) ) }
  </div>
);

export default Footer;