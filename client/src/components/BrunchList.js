import React from 'react';
import BrunchItem from './BrunchItem';

const BrunchList = (props) => {
  return (
    <div>
      <div>
        {props.data.map((restaurant, i) => {
          return (
            <BrunchItem restaurant={restaurant} key={i}/>
          )
        })}
      </div>
    </div>
  )
}

export default BrunchList;