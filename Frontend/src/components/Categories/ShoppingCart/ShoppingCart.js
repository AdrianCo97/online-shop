import { useState, useContext, useEffect } from "react";
import "../ShoppingCart/ShoppingCart.css";
import { CartContext } from "../../../contexts/CartContext.js";
import { UserContext } from "../../../contexts/UserContext.js";
import Navbar from "../../Navbar/Navbar.js";
import DeleteIcon from "@mui/icons-material/Delete";
import { Alert, Button, Collapse, TextField } from "@mui/material";

function ShoppingCart() {
  const { productsInCart, setProductsInCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const [productsToRender, setProductsToRender] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [shoppingList, setShoppingList] = useState({
    data: {
      email: "",
      cartTitle: "",
      products: [],
    },
    formOpen: false,
    shoppingListSaveStatus: {saved: false, status: "", response: ""}
  });

  useEffect(() => {
    gatherAndGetAmountOfProducts();
    determinePrice(productsInCart);
  }, []);

  const gatherAndGetAmountOfProducts = () => {
    let gatheredProducts = [...new Set(productsInCart)];

    let finalProductsArray = [];
    for (let i = 0; i < gatheredProducts.length; i++) {
      const itemCount = getAmountOfProducts(gatheredProducts[i]);
      finalProductsArray.push({
        product: gatheredProducts[i],
        count: itemCount,
      });
    }
    setProductsToRender(finalProductsArray);
  };

  const getAmountOfProducts = (value) => {
    let count = 0;
    productsInCart.forEach((v) => v === value && count++);
    return count;
  };

  const removeProduct = (product, indexToDelete) => {
    setProductsToRender([
      ...productsToRender.slice(0, indexToDelete),
      ...productsToRender.slice(indexToDelete + 1, productsToRender.length),
    ]);

    let array = productsInCart.filter((p) => {
      return p.id != product.product.id;
    });

    setProductsInCart(array);
    determinePrice(array);
  };

  const determinePrice = (array) => {
    let totalPrice = 0;
    for (let i = 0; i < array.length; i++) {
      totalPrice += array[i].price;
    }
    let roundedPrice = Math.round(totalPrice);
    setTotalPrice(roundedPrice);
  };

  const saveShoppingList = async (e) => {
    e.preventDefault();
    const data = {email: user.user.email, cartTitle: shoppingList.data.cartTitle, products: productsInCart}
    await fetch("http://localhost:5000/api/cart/savecart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then(response => {
      if(response.ok){
        response.json().then(data => {
          setShoppingList({ ...shoppingList, shoppingListSaveStatus: {saved: true, status: "success", response: "The list was saved successfully!"}})
        })
      }
      else{
        response.json().then(data => {
          setShoppingList({ ...shoppingList, shoppingListSaveStatus: {saved: true, status: "error", response: data.error}})
        })
      }
    })
  };

  return (
    <div>
      <Navbar />
      <div className="shopping-cart-header">
        <p>Total Price: {totalPrice} €</p>
        {productsInCart.length > 0 ? (
          <Button variant="contained" sx={{ width: 250, mb: 1 }}>
            Go to checkout
          </Button>
        ) : (
          <Button disabled variant="contained" sx={{ width: 250, mb: 1 }}>
            Go to checkout
          </Button>
        )}
        {productsInCart.length > 0 && user.isLoggedIn ? (
          <Button
            variant="contained"
            sx={{ width: 250 }}
            onClick={() => setShoppingList({ ...shoppingList, formOpen: !shoppingList.formOpen })}
          >
            Save the shoppinglist
          </Button>
        ) : (
          <Button disabled variant="contained" sx={{ width: 250 }}>
            Save the shoppinglist
          </Button>
        )}
        <Collapse in={shoppingList.formOpen} sx={{ mb: 2 }}>
          <form onSubmit={saveShoppingList} className="save-shoppinglist-form">
            <TextField
              label="Name the shoppinglist"
              onChange={(e) => {
                setShoppingList({ ...shoppingList, data: {...shoppingList.data, cartTitle: e.target.value}});
              }}
              required
            ></TextField>
            <Button variant="contained" type="submit" sx={{mt: 1}}>
              Save
            </Button>
            <Collapse in={shoppingList.shoppingListSaveStatus.saved} sx={{mt: 1}}>
              <Alert severity={shoppingList.shoppingListSaveStatus.status}>{shoppingList.shoppingListSaveStatus.response}</Alert>
            </Collapse>
          </form>
        </Collapse>
        <div className="info-box">
          <div className="info-box-left">
            <p className="product-title">Title</p>
          </div>
          <div className="info-box-right">
            <p className="product-count">Amount</p>
            <p className="product-price">Price</p>
          </div>
        </div>
      </div>
      <div className="productsinCart">
        {productsToRender.map((product, index) => {
          return (
            <div className="productinCart" key={index}>
              <p className="product-title">{product.product.title}</p>
              <div className="product-body-right">
                <div className="product-cart-info">
                  <p className="product-count">{product.count}</p>
                  <p className="product-price">{product.product.price} €</p>
                </div>
                <DeleteIcon
                  className="trashcan"
                  onClick={() => removeProduct(product, index)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingCart;
