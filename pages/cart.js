import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import Cart from '../components/Cart';

import { Container, Typography } from '@material-ui/core'

export const CartPage = () => (
<Container>
<Head title='Cart'/>
<div className ="nav">
    <nav>
      <div className="header">
        <ul className="navbar-left">
          <Link href="/index" style={{ textDecoration: 'none' }}>
            <li><Typography variant="h4">random.shop</Typography></li>
          </Link>
        </ul> 
      </div>
    </nav>
</div>
<div>
  <Link href="/shop">
    <Typography
    variant="body1"
    style={{cursor: "pointer", width: "180px", marginBottom: "10px"}}
    >⟵ 🛒 Continue Shopping
    </Typography>
  </Link>
  <Cart></Cart>
</div>
</Container>
);

export default CartPage;