// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

// Define the styles
const styles = {
  dateText: {
    fontSize: '12px',
    marginBottom: '5px'
  },
  qtyText: {
    color: '#FF7800',
    marginTop: '10px'
  },
  button: {
    marginTop: '10px'
  }
};

// Function to generate a random date
const getRandomDate = () => {
  const start = new Date(2020, 0, 1); // January 1, 2020
  const end = new Date(); // Today
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return `${randomDate.getDate()} ${randomDate.toLocaleString('default', { month: 'short' })} ${randomDate.getFullYear()}, ${randomDate.getHours()}:${randomDate.getMinutes().toString().padStart(2, '0')}`;
};

// ProductCard Component
const ProductCard = ({ product, addToCart }) => {
  const randomQty = Math.floor(Math.random() * 100) + 1;
  const randomDate = getRandomDate();

  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image={product.img}
        title={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" sx={styles.dateText}>
          {randomDate}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body1" component="p" sx={styles.qtyText}>
          Qty: {randomQty}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(product)}
          sx={styles.button}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
