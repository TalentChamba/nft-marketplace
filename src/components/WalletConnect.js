import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import CartModal from '../components/CartModal';
import Layout from '../components/Layout';
import { products } from '../data';
import { Container, Grid, Typography } from '@mui/material';

const Home = () => {
  // State for managing cart items
  const [cart, setCart] = useState([]);
  // State to check if the wallet is connected
  const [walletConnected, setWalletConnected] = useState(false);
  // State to handle the visibility of the cart modal
  const [cartOpen, setCartOpen] = useState(false);

  // Function to add a product to the cart if the wallet is connected
  const addToCart = (product) => {
    if (walletConnected) {
      setCart([...cart, product]);
    } else {
      alert('Please connect your wallet to add items to the cart.');
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Mock function to simulate wallet connection
  const connectWallet = () => {
    setWalletConnected(true);
  };

  // Calculate the total USD and Satoshis of the items in the cart
  const total = cart.reduce(
    (acc, item) => ({
      usd: acc.usd + item.priceUSD,
      satoshis: acc.satoshis + item.priceSatoshis
    }),
    { usd: 0, satoshis: 0 }
  );

  return (
    <Layout
      cartCount={cart.length}
      openCart={() => setCartOpen(true)}
      connectWallet={connectWallet}
    >
      <Container>
        {/* Heading for the marketplace */}
        <Typography variant="h4" align="center" gutterBottom>
          NFT Marketplace
        </Typography>
        {/* Displaying the number of products available */}
        <Typography variant="h6" align="left" gutterBottom>
          Listing: <span style={{ color: '#FF7800' }}>2000</span>
        </Typography>
        <Grid container spacing={3}>
          {/* Display the first 4 products in one row */}
          <Grid container item spacing={3}>
            {products.slice(0, 4).map(product => (
              <Grid item md={3} key={product.id}>
                <ProductCard product={product} addToCart={addToCart} />
              </Grid>
            ))}
          </Grid>
          {/* Display the remaining products */}
          {products.slice(4).map(product => (
            <Grid item md={3} key={product.id}>
              <ProductCard product={product} addToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Cart modal for viewing and managing cart items */}
      <CartModal
        open={cartOpen}
        handleClose={() => setCartOpen(false)}
        cartItems={cart}
        removeFromCart={removeFromCart}
        total={total}
      />
    </Layout>
  );
};

export default Home;
