import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css files/SearchBar.css";

const SearchBar = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const items = [
    "Fashion",
    "men",
    "pullover",
    "hoodi",
    "t_shirt",
    "women",
    "Jeans",
    "Shirts",
    "pullover",
    "electronics",
    "Gaming laptop",
    "macbook",
    "ultrabook",
    "smartphone",
    "laptop",
    "samsung",
    "apple",
    "lenova",
    "Beauty, toys & more",
    "Mens Grooming",
    "Face wash",
    "Beard oil",
    "After Shave",
    "Baby care",
    "Diapers",
    "Baby Wipes",
    "Baby Food",
    "Two Wheeler",
    "Petrol Vehicles",
    "Engine Oil",
    "Spare parts",
    "Modifactions",
    "Electrical Vehicles",
    "vehicles",
    "Chargers",
    "Spare parts",
  ];

  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );

    setFilteredItems(filteredItems);

    if (searchTerm === "") {
      setIsSearchClicked(false);
      setFilteredItems([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={isSearchClicked ? searchTerm : ""}
        onClick={handleSearchClick}
        onChange={handleSearch}
      />
      {isSearchClicked && (
        <ul className="ull">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index}>
                <Link className="ull2" to={`/search/${item}`}>
                  {item}
                </Link>
              </li>
            ))
          ) : (
            <li className="ull1">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
