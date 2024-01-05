import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ExpandableDropdown from "./components/ExpandableDropdown";
import Home from "./components/catogery js file/Home";
import Men from "./components/catogery js file/Men";
import Women from "./components/catogery js file/Women";
import Electronics from "./components/catogery js file/Electronics";
import Laptops from "./components/catogery js file/Laptops";
import Smartphones from "./components/catogery js file/Smartphones";
import Beauty from "./components/catogery js file/Beauty";
import Mengrooming from "./components/catogery js file/Mengrooming";
import BabyCare from "./components/catogery js file/BabyCare";
import Twowheeker from "./components/catogery js file/Twowheeker";
import Petrol from "./components/catogery js file/Petrol";
import Electrical from "./components/catogery js file/Electrical";
import Pullover from "./components/catogery js file/Pullover";
import Hoodie from "./components/catogery js file/Hoodie";
import Tshirt from "./components/catogery js file/Tshirt";
import Jeans from "./components/catogery js file/Jeans";
import Shirts from "./components/catogery js file/Shirts";
import Gaming from "./components/catogery js file/Gaming";
import MacBook from "./components/catogery js file/MacBook";
import Ultrabook from "./components/catogery js file/Ultrabook";
import Samsung from "./components/catogery js file/Samsung";
import Apple from "./components/catogery js file/Apple";
import Lenova from "./components/catogery js file/Lenova";
import Facewash from "./components/catogery js file/Facewash";
import Beardoil from "./components/catogery js file/Beardoil";
import Aftershave from "./components/catogery js file/Aftershave";
import Diapers from "./components/catogery js file/Dipers";
import Babywipes from "./components/catogery js file/Babywipes";
import BabyFood from "./components/catogery js file/BabyFood";

function App() {
  return (
    <HashRouter>
      <ExpandableDropdown />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/pullover" element={<Home />} />
        <Route path="/Fashion" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/pullover" element={<Pullover />} />
        <Route path="/hoodie" element={<Hoodie />} />
        <Route path="/t-shirt" element={<Tshirt />} />
        <Route path="/women" element={<Women />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/shirt" element={<Shirts />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/gaming laptop" element={<Gaming />} />
        <Route path="/macbook" element={<MacBook />} />
        <Route path="/ultrabook" element={<Ultrabook />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/lenova" element={<Lenova />} />
        <Route path="/beauty, toys & more" element={<Beauty />} />
        <Route path="/mens grooming" element={<Mengrooming />} />
        <Route path="/face wash" element={<Facewash />} />
        <Route path="/beard oil" element={<Beardoil />} />
        <Route path="/after shave" element={<Aftershave />} />
        <Route path="/babycare" element={<BabyCare />} />
        <Route path="/diapers" element={<Diapers />} />
        <Route path="/baby wipes" element={<Babywipes />} />
        <Route path="/baby food" element={<BabyFood />} />
        <Route path="/two wheeler" element={<Twowheeker />} />
        <Route path="/petrol vehicles" element={<Petrol />} />
        <Route path="/engine oil" element={<Petrol />} />
        <Route path="/spare parts" element={<Petrol />} />
        <Route path="/modifcations" element={<Petrol />} />
        <Route path="/electrical vechicle" element={<Electrical />} />
        <Route path="/vehicles" element={<Electrical />} />
        <Route path="/spare parts" element={<Electrical />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
