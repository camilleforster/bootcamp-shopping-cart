import { Card, CardContent, CardActions, CardMedia, Typography, Button, TextField, } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import React, { useState, useEffect } from 'react';

function CartItem({id, name, image_url, price, is_on_sale, sale_price, quantity, on_remove, on_quantity}) {
  const removeFromCart = () => {
    on_remove({ id });
  }

  const getCartItemsUrl = 'http://localhost:8000/v1/cartitems/';
  const handleQuantity = async () => {
    const response = await fetch((getCartItemsUrl + id), {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
      },
      body: {
        quantity: JSON.stringify(quantity)
      }
    });
  }

  const [textInput, setTextInput] = useState(JSON.stringify(quantity));
  const addQuantity = () => {
    if(quantity == 0) {
      removeFromCart();
    } else {
      quantity = quantity + 1
      setTextInput(quantity);
      handleQuantity();
    }
  }

  const subtractQuantity = () => {
    if(quantity == 0) {
      removeFromCart();
    } else {
      quantity = quantity - 1
      setTextInput(quantity);
      handleQuantity()
    }
  }
  
  const handleChange = event => {
    quantity = event.target.value;
    setTextInput(quantity);
    if(quantity == 0) {
      removeFromCart();
    } else {
      handleQuantity();
    }
  }

  return (
    <Card style={{height: "120px", width: "500px", borderRadius: "0px", marginRight: "200px"}}> 
    <div style={{position:"absolute"}}> 
    <div style={{overflow:"hidden", width:"120px", height:"120px", display: "flex", position: "relative"}}>
      <img src={image_url}
      style={{position: "absolute", maxWidth:"100%", width:"100%", height:"auto", bottom:"-10%"}}
      />
    </div>
    </div>
    <CardContent style={{margin: "0 0 0 120px", position: "absolute"}}>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      style={{height: "50px"}}>
      {name}
    </Typography>
    {is_on_sale ? (
      <div style={{display: "flex", gap: "10px"}}>
        <Typography
        variant="body1"
        color="textPrimary"
        >
        ${sale_price}
        </Typography>
        <Typography
        variant="body2"
        color="textSecondary"
        style={{textDecoration: "line-through", marginTop:"2.5px"}}
        >
            {price} 
        </Typography>
      </div>
    ) : (
      <Typography
      variant="body2"
      color="textPrimary"
      textDecoration="none"
      >
      ${price}
      </Typography>
    )}
    <CardActions>
      <IconButton onClick={removeFromCart} style={{ marginLeft: "150px", marginTop:"-45px", display: "flex"}}>
        <DeleteOutlineIcon
        color="secondary"
        />
      </IconButton>
      <Button
          onClick={addQuantity}
          color="secondary"
          style={{ minWidth: "40px", padding: "0 0 0 0", marginTop: "-45px", border: '2px solid', borderRadius: "10px", display:"flex"}}>+
      </Button>
      <TextField
          variant="outlined"
          value={textInput}
          style={{ width: "40px", marginTop:"-45px", display:"flex"}}
          onChange={handleChange}
      />
      <Button
          onClick={subtractQuantity}
          color="secondary"
          style={{ minWidth: "40px", padding: "0 0 0 0", marginTop: "-45px", border: '2px solid', borderRadius: "10px", display:"flex"}}>-
      </Button>
    </CardActions>
    </CardContent>
    </Card>
  );
}
export default CartItem;