import React from 'react'

const BrunchItem = (props) => {
  const restaurant = props.restaurant;
  return (
    <div>
      <div>
        {restaurant.name}
      </div>
      <img src={restaurant.image_url}/>
      <div>
        {restaurant.phone}
      </div>
      <div>
        rating: {restaurant.rating}
      </div>
      <div>
        location:
        {restaurant.location.display_address[0] + ' ' + restaurant.location.display_address[1]}
      </div>
      
    </div>
  )
}
export default BrunchItem;