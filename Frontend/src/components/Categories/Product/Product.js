import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar.js";
import "./product.css";
import { CartContext } from "../../../contexts/CartContext.js";
import { UserContext } from "../../../contexts/UserContext.js";
import { Button, TextField } from "@mui/material";
const jsonData = require("../../../data/products.json");
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [comments, setComments] = useState([]);
  const { productsInCart, setProductsInCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  console.log(comments);
  useEffect(() => {
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].id == id) {
        setProduct(jsonData[i]);
      }
    }

    const getAllComments = async () => {
      const result = await fetch(
        `http://localhost:5000/api/comments/comments/${id}`
      );
      const data = await result.json();
      setComments(data);
    };
    getAllComments();
  }, [id]);

  const addToCartFunction = (product) => {
    setProductsInCart([...productsInCart, product]);
  };

  const submitComment = async () => {};

  return (
    <div>
      <Navbar />
      <div className="product-page">
        <div className="product-page-product-body">
          <div className="product-page-product-header">
            <h2 className="product-page-product-title">{product.title}</h2>
          </div>
          <img className="product-page-product-image" src={product.image} />
          <div className="product-page-product-footer">
            <h1 className="product-page-product-price">{product.price} €</h1>

            <Button
              variant="contained"
              sx={{ width: 300 }}
              onClick={() => addToCartFunction(product)}
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="product-page-specifics">
          <div className="product-page-specifics-description-box">
            <div className="product-page-specifics-description-box-header">
              <h2 className="product-page-specifics-description-box-title">
                Description
              </h2>
            </div>
            <div className="product-page-specifics-description-box-text">
              {product.description}
            </div>
          </div>

          <div className="product-page-specifics-ratings">
            <div className="product-page-specifics-ratings-header">
              <h2 className="product-page-specifics-ratings-title">Reviews</h2>
            </div>
            <div className="product-page-specifics-ratings-comments">
              {comments.length === 0 ? (
                <p>There are no reviews for this product.</p>
              ) : (
                comments.map((review) => {
                  return( <div className="product-page-specifics-ratings-comment">
                    <p>Written by: {review.byUser.firstname}</p>
                    <p>{review.comment}</p>
                  </div>
                  )  
                })
              )}
            </div>
            {user.isLoggedIn ? (
              <form
                className="product-page-specifics-ratings-comment-section"
                onSubmit={submitComment}
              >
                <TextField
                  sx={{ mr: 1 }}
                  className="product-page-specifics-ratings-comment-box"
                  multiline
                  label="What did you think about this product?"
                ></TextField>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
