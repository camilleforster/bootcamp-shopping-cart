import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Typography, Button, Container } from '@material-ui/core'

function ShopItem({id, name, description, image_url, price, is_on_sale, sale_price, on_add}) {
  
  const addToCart = () => {
    on_add({ id, name, image_url, price, is_on_sale, sale_price, quantity: 1 });
  }

  return (
      <Card style={{height: "380px", width: "280px", marginBottom: "20px"}}>
        {/* <div className="img-icon"> */}
          {/* <FavoriteIcon
            className="favorite-icon"
            style={{
              color: 'red',
              fontSize: 50,
              }}
          /> */}
          <CardMedia
            component='img'
            height='200px'
            image={image_url}
          />
        {/* </div> */}
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div">
          {name}
        </Typography>
        <Typography
          className = "body2"
          variant="body2"
          color="textSecondary"
          style={{height: "75px"}}>
          {description}
        </Typography>
        <div style={{marginRight: "50px"}}>
          {is_on_sale ? (
            <div style={{display: "flex", gap: "10px"}}>
              <Typography
              variant="h5"
              color="textPrimary">
              ${sale_price}
              </Typography>
              <Typography
              variant="h6"
              color="textSecondary">
                 {price} 
              </Typography>
            </div>
          ) : (
            <Typography
            variant="h5"
            color="textPrimary"
            textDecoration="none"
            >
            ${price}
            </Typography>
          )}
        </div>
        <CardActions>
          <Button
            onClick={addToCart}
            variant="outlined"
            color="secondary"
            style={{ marginTop: "-50px", marginLeft: "135px", border: '2px solid', borderRadius: "10px", position:"absolute"}}>Add to cart</Button>
        </CardActions>
      </CardContent>
      </Card>
)}

export default ShopItem;