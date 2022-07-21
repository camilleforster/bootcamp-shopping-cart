import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import ShopItem from './ShopItem'

function ShopItemList() {
  // this is the state we will use to hold the response from the api
  const getProductsUrl = 'http://localhost:8000/v1/products';
  const addToCartUrl = 'http://localhost:8000/v1/cartitems';

  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
      (async () => {
        const response = await fetch(getProductsUrl, {method: 'GET'});
        const json = await response.json();
        setProducts(json);
    })()
  }, [])

  const handleAddToCart = async (product) => {
    /* add product to cart via api */
    /* redirect to the cart page */
    const response = await fetch(addToCartUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    router.push('/cart');
  }

  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1} style={{marginBottom:"50px"}}>
        {
          products.map(
            (product)=>(
              <Grid container item xs={3}> 
              <ShopItem 
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  image_url={product.image_url}
                  price={product.price}
                  is_on_sale={product.is_on_sale}
                  sale_price={product.sale_price}
                  on_add={(product) => handleAddToCart(product)}
              />
              </Grid>
          ))
        }
    </Grid>
  )
}

export default ShopItemList;