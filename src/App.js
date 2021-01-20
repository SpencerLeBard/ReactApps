import React from 'react';
import CardList from './CardList.js';


class App extends React.Component {
  //constructor
  //this
  render(){
    return (
      <div>
    <div className="header">{this.props.title} </div>
    <CardList />
    </div>
    );
  }
}


export default App;
