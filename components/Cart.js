import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import CartItem from './CartItem'

function Cart() {

  const getCartItemsUrl = 'http://localhost:8000/v1/cartitems/';
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveFromCart = async (cartItem) => {
    const response = await fetch(getCartItemsUrl + cartItem.id, {
      method: 'DELETE',
      body: JSON.stringify(cartItem.id)
    });
  }

  useEffect(() => {
    (async () => {
      fetch(getCartItemsUrl, {method: 'GET'}).then((response => response.json())).then((data) => setCartItems(data));
    })()
  }, [cartItems])

  return (
    <Grid container direction="row" spacing={3}>
    {
      cartItems.map(
        (cartItem)=>(
          <Grid container item xs> 
          <CartItem 
              id={cartItem.id}
              name={cartItem.name}
              image_url={cartItem.image_url}
              price={cartItem.price}
              is_on_sale={cartItem.is_on_sale}
              sale_price={cartItem.sale_price}
              quantity={cartItem.quantity}
              on_remove={(cartItem) => handleRemoveFromCart(cartItem)}
          />
          </Grid>
      ))
    }
    </Grid>
      )
}

export default Cart