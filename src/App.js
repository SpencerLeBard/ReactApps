import React from 'react';
import CardList from './CardList.js';
import Form from './Form.js'

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];
class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//     profile: testData ,
//   }
// }
state = {
  profile: testData,
};
addNewProfile = (profileData) => {
  this.setState(prevState => ({
    profile: [...prevState.profile , profileData]
  }))
}
  render(){
    return (
      <div>
    <div className="header">{this.props.title} </div>
    <Form onSubmit={this.addNewProfile} />
    <CardList profile={this.state.profile}/>
    </div>
    );
  }
}


export default App;
