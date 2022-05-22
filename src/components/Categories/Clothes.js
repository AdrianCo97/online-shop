import React, {useState} from 'react';

function Clothes(){
    const[clothes, setClothes] = useState([])
    
    useEffect(() => {
        const getClothes = async () => {
            const menClothingResponse = await fetch("https://fakestoreapi.com/products/category/men's clothing");
            const womenClothingResponse = await fetch("https://fakestoreapi.com/products/category/women's clothing");

            const menClothing = menClothingResponse.json();
            const womenClothing = womenClothingResponse.json();

            setClothes(menClothing);
            setClothes(clothes => [...clothes, womenClothing]);

            console.log(clothes);
        }
        getClothes();
    });

    return (
        <div>

        </div>
    )
}