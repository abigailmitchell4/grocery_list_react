import React from 'react';
import GroceryItem from './GroceryItem'

const List = (props) => (
  <div className="list">
    <h2>{props.name}</h2>
    <ul>
      { props.items.map( item => <GroceryItem key={item.id} {...item} itemClick={ props.itemClick } />)}
    </ul>
  </div>
);

export default List;