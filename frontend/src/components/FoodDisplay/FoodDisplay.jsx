import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { Link } from 'react-router-dom';

const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext);
  return (
    <>
    <div className='food-display' id='food-display'>
       <h2>Influencers</h2>
       <div className="food-display-list">
    {food_list.map((item) => (
      // <Link to={`/food/${item._id}`} key={item._id} className="food-item-link">
        <FoodItem 
            key={item._id}  // ✅ Use unique _id instead of index
            id={item._id} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            image={item.image} 
        />
        // </Link>
    ))}
</div>

    </div>
    </>
    
  )
}

export default FoodDisplay;
