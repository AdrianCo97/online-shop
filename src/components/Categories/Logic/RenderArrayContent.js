import Product from "../Product/Product.js";
import { useNavigate } from "react-router-dom";

function RenderSpecificClothes({ array }) {

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <div className="products">
      {array.map((array) => {
        return (
          <div className="product" key={array.id} onClick={() => handleClick(array.id)}>
            <img src={array.image}></img>
            <div className="product-info">
              <p className="title">{array.title}</p>
              <p className="price">{array.price} SEK</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RenderSpecificClothes;
