import React, { useState, useEffect } from "react";
import axios from "axios";

function AddtoCart() {
  const [cartitems, setCartitems] = useState([])

  useEffect(() => {
    const cart = axios.get('http://localhost:5500/api/carts')
    .then(res => setCartitems(cart.data))
    .catch(err => console.log(err,'cart errror'))
  }, [])

}

export default AddtoCart;