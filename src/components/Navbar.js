import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Menu, MenuItem, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ChevronLeft, Menu as FeatherMenu } from 'react-feather';

// Styles for the Navbar
const styles = {
    appBar: {
      marginLeft: 0,
      width: 'calc(100% - 240px)',
      backgroundColor: '#141718',
      boxShadow: 'none'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center'
    },
    iconButton: {
      marginRight: 16
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: '50%'
    },
    badgeIcon: {
      fontSize: '20px'
    },
    menuItem: {
      fontSize: '12px'
    },
    menu: {
      width: '200px'
    },
    title: {
      flexGrow: 1,
      fontSize: '12px'
    }
  };

const Navbar = ({ cartCount, openCart, connectWallet, toggleSidebar }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [sidebarIcon, setSidebarIcon] = React.useState('ChevronLeft');

    // Open the user menu
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

   // Close the user menu
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Toggle sidebar visibility
    const handleToggleSidebar = () => {
        toggleSidebar();
        setSidebarIcon(sidebarIcon === 'ChevronLeft' ? 'Menu' : 'ChevronLeft');
    };

    return (
        <AppBar position="fixed" sx={styles.appBar}>
            <Toolbar>
                <IconButton color="inherit" edge="start" onClick={handleToggleSidebar}>
                    {sidebarIcon === 'ChevronLeft' ? <ChevronLeft size={24} /> : <FeatherMenu size={24} />}
                </IconButton>
                <Typography variant="h6" sx={styles.title}> MarketPlace </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton color="inherit" style={{ marginRight: 16 }}>
                        <Badge badgeContent={0} color="error">
                            <NotificationsIcon sx={styles.badgeIcon}/>
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" onClick={connectWallet} style={{ marginRight: 16, fontSize: '12px' }}> Connect Wallet </IconButton>
                    <IconButton color="inherit" onClick={openCart} style={{ marginRight: 16 }}>
                        <Badge badgeContent={cartCount} color="error">
                            <ShoppingCartIcon sx={styles.badgeIcon}/>
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" onClick={handleMenuOpen}>
                        <img src="img/avatars/avatar-2.jpg" alt="User" style={styles.avatar}/>
                    </IconButton>
                </div>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} PaperProps={{ sx: styles.menu }}>
                    <MenuItem onClick={handleMenuClose} sx={styles.menuItem}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose} sx={styles.menuItem}>Settings</MenuItem>
                    <Divider />
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
