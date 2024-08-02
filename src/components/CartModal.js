import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

// Styles for the CartModal
const styles = {
  dialogTitle: {
    backgroundColor: '#101316',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  closeButton: {
    color: '#fff'
  },
  dialogContent: {
    backgroundColor: '#101316',
    color: '#fff'
  },
  thumbnail: {
    width: 50,
    height: 50
  },
  itemDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  itemText: {
    fontSize: '13px'
  },
  emptyCartText: {
    fontSize: '14px'
  },
  dialogActions: {
    backgroundColor: '#101316'
  },
  actionButton: {
    borderColor: '#B4986B',
    color: '#B4986B'
  },
  checkoutButton: {
    borderColor: '#FF7800',
    color: '#FF7800'
  },
  deleteIcon: {
    color: '#FF0000'
  }
};

// CartModal component
const CartModal = ({ open, handleClose, cartItems, removeFromCart, total }) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle sx={styles.dialogTitle}>
      My Basket
      <IconButton onClick={handleClose} sx={styles.closeButton}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent sx={styles.dialogContent}>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} style={styles.thumbnail} />
              <div className="item-details" style={styles.itemDetails}>
                <Typography sx={styles.itemText}>{item.name}</Typography>
                <Typography sx={styles.itemText}>${item.priceUSD} / {item.priceSatoshis} Satoshis</Typography>
              </div>
              <IconButton onClick={() => removeFromCart(item.id)} color="secondary">
                <DeleteIcon sx={styles.deleteIcon} />
              </IconButton>
            </div>
          ))}
          <div className="cart-total">
            <Typography variant="h6" sx={styles.itemText}>Total: ${total.usd} / {total.satoshis} Satoshis</Typography>
          </div>
        </>
      ) : (
        <Typography sx={styles.emptyCartText}>Your cart is empty</Typography>
      )}
    </DialogContent>
    <DialogActions sx={styles.dialogActions}>
      <Button onClick={handleClose} variant="outlined" sx={styles.actionButton}>Add Another</Button>
      <Button onClick={handleClose} variant="outlined" sx={styles.checkoutButton}>Checkout</Button>
    </DialogActions>
  </Dialog>
);

export default CartModal;
