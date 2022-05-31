import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar.js";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import CircularProgress from "@mui/material/CircularProgress";
import RenderArrayContent from "../Logic/RenderArrayContent.js";
const jsonData = require("../../../data/products.json");

function Clothes() {
  const [isLoading, setIsLoading] = useState(true);
  const [clothes, setClothes] = useState([]);
  const [womensClothes, setWomensClothes] = useState([]);
  const [mensClothes, setMensClothes] = useState([]);
  const [genderSelection, setGenderSelection] = useState("");

  useEffect(() => {
    const allClothes = [];
    const mensClothesArray = [];
    const womensClothesArray = [];
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].category === "men's clothing") {
        mensClothesArray.push(jsonData[i]);
        allClothes.push(jsonData[i]);
      } else if (jsonData[i].category === "women's clothing") {
        womensClothesArray.push(jsonData[i]);
        allClothes.push(jsonData[i]);
      }
    }
    setMensClothes(mensClothesArray);
    setWomensClothes(womensClothesArray);
    setClothes(allClothes);
    setIsLoading(false);
  }, []);

  const handleChange = (event) => {
    const result = event.target.value;
    setGenderSelection(result);
  };

  const renderClothes = (genderSelection) => {
    if (genderSelection === "male") {
      return <RenderArrayContent array={mensClothes} />;
    } else if (genderSelection === "female") {
      return <RenderArrayContent array={womensClothes} />;
    } else {
      return <RenderArrayContent array={clothes} />;
    }
  };

  return (
    <div>
      <Navbar />
      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select value={genderSelection} onChange={handleChange}>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="all">All Clothes</MenuItem>
        </Select>
      </FormControl>

      <div className="main-content">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <div className="products">{renderClothes(genderSelection)}</div>
        )}
      </div>
    </div>
  );
}

export default Clothes;
