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
  item: { cursor: "pointer", },
  complete: { color: "grey", textDecoration: "line-through"}
};

export default GroceryItem;