import React from 'react';

/*
	const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];
*/


class Card extends React.Component {
  render(){
    return (
      <div className="github-profile" style={{margin :'1rem'}}>
        <img src="https://placehold.it/75" alt="pic" />
        <div className="info" style={{display: 'inline-block' , marginLeft: 10}}>
          <div className="name" style={{fontSize: '125%'}}> Name Here ...</div>
          <div className="company">Company Here ...</div>
        </div>
      </div>
    )
  }
}

export default Card;
