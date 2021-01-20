import React from 'react';
import Card from './Card.js'


const CardList = (props) => (
    <div>
      {props.profile.map(profile => <Card {...profile}/>)}
      {/* /<Card {...testData[0]} />
      <Card {...testData[1]} />
      <Card {...testData[2]} /> */}
    </div> 
);

export default CardList;