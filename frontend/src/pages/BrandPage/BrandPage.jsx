import React, { useState } from "react";
import "./BrandPage.css";
import { Link } from "react-router-dom";

const brands = [
  {
    id: 1,
    name: "Coca-Cola Summer Campaign",
    description: "Join our summer campaign to promote new flavors",
    budget: "$5000 - $10000",
    details: [
      "Creators who love capturing summer moments 🌞🌊",
      "Engaging storytelling that highlights fun, energy, and togetherness",
      "High-quality visuals showcasing Coca-Cola as the ultimate refreshment",
    ],
    logo: "/coco.jpg",
  },
  {
    id: 2,
    name: "Nike Fitness Challenge",
    description: "Promote our latest fitness gears",
    budget: "$5000 - $10000",
    details: [
      "Fitness influencers who can showcase Nike's gear in action",
      "High-energy workout content for social media",
      "Creative content that motivates and inspires",
    ],
    logo: "/nike.jpg",
  },
  {
    id: 3,
    name: "Adidas Fitness Challenge",
    description: "Promote our latest fitness gears",
    budget: "$7000 - $10000",
    details: [
      "Fitness influencers who can showcase Adidas gear in action",
      "High-energy workout content for social media",
      "Creative content that motivates and inspires",
    ],
    logo: "/adidas.jpg",
  },
];

const BrandPage = () => {
    
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState("all");

  const toggleBrand = (id) => {
    setSelectedBrand(selectedBrand === id ? null : id);
  };

  const handleFilterChange = (event) => {
    setSelectedBudget(event.target.value);
  };

  const filteredBrands = brands.filter((brand) => {
    if (selectedBudget === "all") return true;
    if (selectedBudget === "$5000 - $10000") return brand.budget === "$5000 - $10000";
    if (selectedBudget === "$7000 - $10000") return brand.budget === "$7000 - $10000";
    return false;
  });

  return (
    <div className="brand-container">
      <aside className="sidebar">
        <h3>Filter by Budget</h3>
        <select onChange={handleFilterChange} value={selectedBudget}>
          <option value="all">All</option>
          <option value="$5000 - $10000">$5000 - $10000</option>
          <option value="$7000 - $10000">$7000 - $10000</option>
        </select>
      </aside>

      <div className="brand-list">
        <h2>Brands</h2>
        {filteredBrands.map((brand) => (
          <div key={brand.id} className={`brand-card ${selectedBrand === brand.id ? "expanded" : ""}`}>
            <div className="brand-header" onClick={() => toggleBrand(brand.id)}>
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
              <div>
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
              </div>
              <span className="budget">{brand.budget}</span>
            </div>
            {selectedBrand === brand.id && (
              <div className="brand-details">
                <h4>What We're Looking For</h4>
                <ul>
                  {brand.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <Link to="/success"><button className="apply-btn">Apply Now</button></Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;

