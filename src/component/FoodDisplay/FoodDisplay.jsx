import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import FoodItems from '../FoodItems/FoodItems'
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)
  // console.log(food_list)
  return (
    <div className='food-display ' id='food-display' >
      <h2 >Top dishesh near you </h2>

      {/* list of food display */}
      <div className="food-display-list">
        {food_list.map((item, index) => {
          //selecting category and show this category food otherwise show all food
          if (category === "All" || category === item.category) {
            return (
              <FoodItems item={item} key={index} id={item._id} name={item.name} price={item.price} image={item.image} description={item.description} />
            )
          }

        })}
      </div>

    </div>
  )
}

export default FoodDisplay
