import React from 'react';
import Card from './Card';


class App extends React.Component {
  //constructor
  //this
  render(){
    return (
      <div>
    <div className="header">{this.props.title} </div>
    <Card />
    </div>
    );
  }
}


export default App;
