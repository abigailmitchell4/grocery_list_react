import React from 'react';

const GroceryItem = (props) => {
  return (
    <li
      style={ props.complete ? { ...styles.item, ...styles.complete} : styles.item }
      onClick={() => props.itemClick(props.id)} >
      { props.name }
    </li>
  )
}

const styles = {
  item: { cursor: "pointer", fontWeight: "500"},
  complete: { color: "grey", textDecoration: "line-through", fontWeight: "500"}
};

export default GroceryItem;