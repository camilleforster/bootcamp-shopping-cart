import React, { useState, useEffect } from 'react';
import Head from '../components/head';
import Link from '@material-ui/core/Link';
import ShopItemList from '../components/ShopItemList';

import { Container, Typography, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from "@material-ui/core/Badge";

function ShopPage() {

  // Cart Total
  const addToCartUrl = 'http://localhost:8000/v1/cartitems';
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
      (async () => {
        const response = await fetch(addToCartUrl, {method: 'GET'});
        const json = await response.json();
        setCartTotal(json.length);
    })()
  }, [cartTotal])

  // Product Total
  const getProductsUrl = 'http://localhost:8000/v1/products';
  const [productTotal, setProductTotal] = useState(0);

  useEffect(() => {
      (async () => {
        const response = await fetch(getProductsUrl, {method: 'GET'});
        const json = await response.json();
        setProductTotal(json.length);
    })()
  }, [])

  // Sorting State
  const [selected, setSelected] = useState('');

  const selectionChangeHandler = (event) => {
  setSelected(event.target.value);
  }

return(
  <Container>
    <Head title='Home'/>
    <div className ="nav">
    <nav>
      <div className="header">
        <ul className="navbar-left">
          <Link href="/index" style={{ textDecoration: 'none' }}>
            <li><Typography variant="h4">random.shop</Typography></li>
          </Link>
        </ul> 
        <ul className="navbar-right">
          <li>
          <Link href="/cart">
            <IconButton>
                <Badge badgeContent={cartTotal} color="secondary" overlap="rectangular">
                  <ShoppingCartIcon style={{
                    color: 'black',
                    fontSize: 22,
                    }}/>
                </Badge>
            </IconButton>
          </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    {/* <Container style={{ border: '2px'}}>
      <Select displayEmpty variant="standard" value={selected} onChange={selectionChangeHandler}>
        <MenuItem value="">Default Sorting</MenuItem>
        <MenuItem value={1}>Price Low to High</MenuItem>
        <MenuItem value={2}>Price High to Low</MenuItem>
      </Select>
    </Container> */}
    <ShopItemList/>
  </Container>
);
}

export default ShopPage;