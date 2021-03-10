import React from 'react';
import '../stylesheet/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>EXPLORE MORE BELOW</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pic02.jpeg'
              text='From UIUC to USC, I have gained solid academic background, learn more about me here!'
              label='Portfolio'
              path='/about'
            />
            <CardItem
              src='images/pic03.jpeg'
              text='Check out my favourite music, or post your favourite music here!'
              label='Music'
              path='/music'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pic04.jpeg'
              text='See what is happening in crypto world! Or check out the chart here!'
              label='Cryptocurrentcy'
              path='/stock'
            />
            <CardItem
              src='images/pic05.jpeg'
              text='Talk or post anything you want here, let us have some fun'
              label='Discussion'
              path='/post'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;