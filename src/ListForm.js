import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: "" });
  };

  handleChange(e) {
    //you are looking for the target
    //use debugger and type e.target in console to find target
    // need to export this particular state up to List (its parent) in order to update the state
    this.setState({ name: e.target.value});
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input 
          required placeholder="Add an Item" 
          value={this.state.name}
          name="name"
          // onChange is a JSX attribute, on Change is a function we made up
          onChange={this.handleChange}
        />
      </form>
    )
  };
};

export default ListForm;
