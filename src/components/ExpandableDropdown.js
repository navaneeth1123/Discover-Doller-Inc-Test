import categories from "./categories";
import "./css files/DropDown.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import { useState } from "react";

function ExpandableDropdown() {
  const [click, setClick] = useState(false);

  const onclick = () => {
    setClick(!click);
  };

  return (
    <div className="dropdown0">
      <SearchBar />
      <div className="gap"></div>
      {categories.map((category) => (
        <ul className="dropdown" key={category.id}>
          <li>
            <Link className="linkcolor" to={`/${category.name}`}>
              {category.name} <FontAwesomeIcon icon={faAngleDown} />
            </Link>
          </li>
          {category.subcategories && (
            <ul onClick={onclick} className="dropdown1">
              {category.subcategories.map((subcategory) => (
                <li key={subcategory.id}>
                  <Link className="linkcolor" to={`/${subcategory.name}`}>
                    {subcategory.name}
                    {click ? (
                      <FontAwesomeIcon icon={faAngleUp} />
                    ) : (
                      <FontAwesomeIcon icon={faAngleDown} />
                    )}
                  </Link>

                  {subcategory.subcategorie && (
                    <ul>
                      {subcategory.subcategorie.map((subsubcategory) => (
                        <li
                          className={click ? "dropdown2" : "dropdown3"}
                          id="dropdownli"
                          key={subsubcategory.id}
                        >
                          <Link
                            className="linkcolor"
                            to={`/${subsubcategory.name}`}
                          >
                            {subsubcategory.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </ul>
      ))}
    </div>
  );
}

export default ExpandableDropdown;
