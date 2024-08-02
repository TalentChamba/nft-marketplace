import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';

const styles = {
  layoutContainer: {
    display: 'flex',
  },
  mainContent: {
    flexGrow: 1,
    transition: 'margin-left 0.3s',
  },
  mainPadding: {
    padding: '20px'
  }
};

const Layout = ({ children, cartCount, openCart, connectWallet }) => {
  // State to manage whether the sidebar is open or closed
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Navbar includes props for cart, wallet functions, and sidebar toggle */}
      <Navbar cartCount={cartCount} openCart={openCart} connectWallet={connectWallet} toggleSidebar={toggleSidebar} />

      {/* Flex container for sidebar and main content */}
      <div style={styles.layoutContainer}>
        {/* Render the Sidebar component, passing the open state */}
        <Sidebar open={sidebarOpen} />

        {/* Main content area adjusts its margin based on sidebar state */}
        <div style={{ ...styles.mainContent, marginLeft: sidebarOpen ? 240 : 0 }}>
          <Container fluid>
            <Row>
              <Col>
                {/* Display children components with padding */}
                <main style={styles.mainPadding}>
                  {children}
                </main>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Layout;
