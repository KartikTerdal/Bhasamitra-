import './ExploreMenu.css';
import PropTypes from "prop-types"; 
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore</h1>

      <div className='explore-menu-list'>
        {menu_list.map((item, index) => ( // Always show all categories
          <div 
            key={index} 
            className="explore-menu-list-item"
            onClick={() => setCategory(category === item.menu_name ? "All" : item.menu_name)}
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr/>
    </div>
  );
};

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu;
