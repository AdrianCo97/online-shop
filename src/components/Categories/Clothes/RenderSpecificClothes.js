function RenderSpecificClothes({ clothes }) {
    
    console.log(clothes);
  return (
    <div className="products">
      {clothes.map((clothes) => {
        return(
          <div className="product" key={clothes.id}>
          <img src={clothes.image}></img>
          <div className="product-info">
            <p className="title">{clothes.title}</p>
            <p className="price">{clothes.price} SEK</p>
          </div>
        </div>
        )
      })}
    </div>
  );
}

export default RenderSpecificClothes;
