import React from 'react';
import './App.css';
import List from './List';
import ListForm from './ListForm';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        groceries: [
          // { id: 1, name: "Apples", complete: true },
          // { id: 2, name: "Eggs", complete: false },
          // { id: 3, name: "Cheese", complete: false },
          // { id: 4, name: "Carrots", complete: false }
        ],
        filter: 'All'
      };
    this.addItem = this.addItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  setFilter = (filter) => {
    this.setState({ filter })
  }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
   
   }

   addItem(name) {
     const grocery = {
       id: this.getUniqId(),
       name,
       complete: false
     };
     this.setState({ groceries: [grocery, ...this.state.groceries] });
   };

   handleClick(id) {
    this.setState({
      groceries: this.state.groceries.map ( item => {
        if (item.id === id) 
          return {
            ...item,
            complete: !item.complete,
          }
          return item;
        }
      )
    })
  };

  visibleItems = () => {
    const { groceries, filter } = this.state;
    switch(filter) {
      case 'Not Bought':
        return groceries.filter( t => !t.complete )
      case 'Bought':
        return groceries.filter( t => t.complete )
      default:
        return groceries;
    }
  }
  
  render() {
    return (
      <div className="App App-header">
        <h1>Grocery List</h1>
        <ListForm addItem={ this.addItem } />
        <List items={this.visibleItems()} itemClick={ this.handleClick }/>
        <Footer filter={this.state.filter} setFilter={this.setFilter} />
      </div>
    );
  };
};

export default App;
