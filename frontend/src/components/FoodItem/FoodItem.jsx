import React from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css';

const peopleItems = [
    {
        id: 1,
        p:"2000$",
        name: "Emma Johnson",
        category: "Fashion",
        description: "A top fashion designer known for her unique runway designs.",
        image: "/i1.jpg"
    },
    {
        id: 2,
        p:"3000$",
        name: "Michael Smith",
        category: "Technology",
        description: "An AI researcher leading innovations in machine learning.",
        image: "/i2.jpg"
    },
    {
        id: 3,
        p:"1800$",
        name: "Sophia Davis",
        category: "Fashion",
        description: "A model and influencer redefining modern streetwear trends.",
        image: "/i3.jpg"
    },
    {
        id: 4,
        p:"5000$",
        name: "David Lee",
        category: "Business",
        description: "An entrepreneur behind multiple successful startups.",
        image: "/i4.jpg"
    },
    {
        id: 5,
        p:"6000$",
        name: "Olivia Brown",
        category: "Fashion",
        description: "A stylist with an eye for elegant and minimalist fashion.",
        image: "/i5.jpg"
    },
    {
        id: 6,
        p:"1800$",
        name: "James Wilson",
        category: "Technology",
        description: "A software engineer known for open-source contributions.",
        image: "/i6.jpg"
    }
];

const FoodItem = ({ category }) => {
    return (
        <div className="food-item-container">
            {peopleItems
                .filter(person => category === "All" || person.category === category) // Filter items based on category
                .map(({ id, p, name, category, description, image }) => (
                    <Link 
                        key={id}
                        to={{ pathname: `/person/${id}`, state: { id, p, name, category, description, image } }} 
                        className='food-item-link'
                    >
                        <div className='food-items'>
                            <img 
                                src={image} 
                                alt={name} 
                                onError={(e) => e.target.src = "/fallback-image.png"} 
                            />
                            <div className="food-item-info">
                                <div className="food-item-name-rating">
                                    <p>{name}</p>
                                </div>
                                <p className="food-item-description">{description}</p>
                                <p className="food-item-price">{category}</p>
                                <p className="food-item-description">{p}</p>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default FoodItem;
