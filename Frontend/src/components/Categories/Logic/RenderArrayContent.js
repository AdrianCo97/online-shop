import { useNavigate } from "react-router-dom";

function RenderSpecificClothes({ array }) {
  const navigate = useNavigate();
  const navigateToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="products">
      {array.map((array) => {
        return (
          <div
            className="product"
            key={array.id}
            onClick={() => navigateToProduct(array.id)}
          >
            <div className="product-header">
              <p className="title">{array.title}</p>
            </div>
            <img className="thumbnail" src={array.image}></img>
            <div className="product-info">
              <p className="price">{array.price} €</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RenderSpecificClothes;
