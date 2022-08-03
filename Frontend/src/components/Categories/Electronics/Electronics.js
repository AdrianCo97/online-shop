import Navbar from "../../Navbar/Navbar.js";
import RenderArrayContent from "../Logic/RenderArrayContent.js";
import {useState, useEffect} from "react";
const jsonData = require("../../../data/products.json");

function Electronics(){

    const [electronics, setElectronics] = useState([]);

    useEffect(() => {
        const electronicsArray = [];
        for(let i = 0; i < jsonData.length; i++){
            if(jsonData[i].category === "electronics"){
                electronicsArray.push(jsonData[i]);
            }
        }
        setElectronics(electronicsArray);
    },[])

    return(
        <div>
            <Navbar />
            <div className="products">
                <RenderArrayContent array={electronics} />
            </div>
        </div>
    )
}

export default Electronics;