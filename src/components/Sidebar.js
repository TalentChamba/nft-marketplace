import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Wallet, ShoppingCart, FileCopy, Settings, Storefront, ListAlt, ShoppingBag, Star, Info, Logout, AttachMoney, Build, Group, Download } from '@mui/icons-material';


const logoStyle = {
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center'
};

const listItemStyle = {
  '& span': {
    fontSize: '12px',
    lineHeight: '1px'
  }
};

const logoImageStyle = {
  width: 40,
  height: 'auto'
};

const iconStyle = {
  color: '#fff'
};

const backgroundColor ={
  backgroundColor: '#fff'
}

const Sidebar = ({ open }) => (
  <div style={{ width: 240, height: '100vh', backgroundColor: '#141718', padding: '20px', position: 'fixed', color: '#fff', transform: open ? 'translateX(0)' : 'translateX(-240px)', transition: 'transform 0.3s' }}>
    <div style={logoStyle}>
      <img src="/img/AuBit-Logo.png" alt="Logo" style={logoImageStyle}  />
    </div>
    <List>
      <ListItem button component={Link} to="/">
        <ListItemIcon><DashboardIcon style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Dashboard" sx={listItemStyle}/>
      </ListItem>
      <ListItem button component={Link} to="/wallet">
        <ListItemIcon><Wallet style={iconStyle} /></ListItemIcon>
        <ListItemText primary="AuBit Wallet" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/assets">
        <ListItemIcon><ShoppingCart style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Assets" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/marketplace">
        <ListItemIcon><Storefront style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Market Place" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/mint">
        <ListItemIcon><FileCopy style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Mint" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/sell">
        <ListItemIcon><ShoppingBag style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Sell" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/claims">
        <ListItemIcon><Settings style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Claims" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/import-contract">
        <ListItemIcon><Download style={iconStyle} /></ListItemIcon> {/* Updated icon */}
        <ListItemText primary="Import Contract" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/wallet-settings">
        <ListItemIcon><Settings style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Wallet Settings" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/validate-aubit">
        <ListItemIcon><Info style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Validate AuBit" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/store">
        <ListItemIcon><Storefront style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Store" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/inventory">
        <ListItemIcon><ListAlt style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Inventory" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/orders">
        <ListItemIcon><ShoppingCart style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Orders" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/reward-program">
        <ListItemIcon><Star style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Reward Program" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/overview">
        <ListItemIcon><Info style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Overview" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/earnings">
        <ListItemIcon><AttachMoney style={iconStyle} /></ListItemIcon> {/* Updated icon */}
        <ListItemText primary="Earnings" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/yield-hub">
        <ListItemIcon><Info style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Yield Hub" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/sales">
        <ListItemIcon><Info style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Sales" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/teams">
        <ListItemIcon><Group style={iconStyle} /></ListItemIcon> {/* Updated icon */}
        <ListItemText primary="Teams" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/leaderboards">
        <ListItemIcon><Info style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Leaderboards" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/tools">
        <ListItemIcon><Build style={iconStyle} /></ListItemIcon> {/* Updated icon */}
        <ListItemText primary="Tools" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/starvara">
        <ListItemIcon><Info style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Starvara" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/news">
        <ListItemIcon><Info style={iconStyle} /></ListItemIcon>
        <ListItemText primary="News" sx={listItemStyle} />
      </ListItem>
      <ListItem button component={Link} to="/support">
        <ListItemIcon><Info style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Support" sx={listItemStyle} />
      </ListItem>
    </List>
    <Divider style={backgroundColor} />
    <List>
      <ListItem button component={Link} to="/logout">
        <ListItemIcon><Logout style={iconStyle} /></ListItemIcon>
        <ListItemText primary="Logout" sx={listItemStyle} />
      </ListItem>
    </List>
  </div>
);

export default Sidebar;
