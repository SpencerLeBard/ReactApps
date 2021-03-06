import React from 'react';
import Card from './Card.js'


const CardList = (props) => (
    <div>
      {props.profile.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
);

export default CardList;