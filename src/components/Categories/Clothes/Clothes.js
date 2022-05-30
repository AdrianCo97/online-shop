import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar.js";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import RenderArrayContent from "../Logic/RenderArrayContent.js";

function Clothes() {
  const [clothes, setClothes] = useState([]);
  const [womensClothes, setWomensClothes] = useState([]);
  const [mensClothes, setMensClothes] = useState([]);
  const [genderSelection, setGenderSelection] = useState("");

  useEffect(() => {
    const getAllClothes = async () => {
      const menClothingResponse = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      const womenClothingResponse = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      );

      const mensClothes = await menClothingResponse.json();
      const womensClothes = await womenClothingResponse.json();

      setMensClothes(mensClothes);
      setWomensClothes(womensClothes);
      setClothes(mensClothes);
      setClothes((clothes) => [...clothes, ...womensClothes]);
    };
    getAllClothes();
  }, []);

  const handleChange = (event) => {
    const result = event.target.value;
    setGenderSelection(result);
  };

  const renderClothes = (genderSelection) => {
    if (genderSelection === "male") {
      return <RenderArrayContent array={mensClothes} />
    } else if(genderSelection === "female") {
      return <RenderArrayContent array={womensClothes} />
    } else {
      return <RenderArrayContent array={clothes} />
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
        <div className="products">
          {renderClothes(genderSelection)}
        </div>
      </div>
    </div>
  );
}

export default Clothes;
