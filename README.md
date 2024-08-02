NFT Marketplace React App
Overview
This React application is a mock NFT marketplace where users can view products, add them to a cart, and proceed to checkout. The app includes basic wallet connection functionality and cart management. The design layout is partially integrated and there are minor issues to resolve.

Getting Started with Create React App
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you're ready for it.

Project Structure
Here’s a brief overview of the project's file structure and the role of each file:

src/pages/Home.js
Description: The main page of the application. It displays the list of NFT products and provides functionality to add products to the cart. It also handles wallet connection and shows the cart modal.
Components:
ProductCard: Displays individual product details and the "Add to Cart" button.
CartModal: A modal dialog showing the items in the cart, allowing users to remove items and view the total.
src/components/ProductCard.js
Description: A component that displays information about a single product, including a title, an image, and a button to add the product to the cart.
Props:
product: The product data to be displayed.
addToCart: Function to handle adding the product to the cart.
src/components/CartModal.js
Description: A modal dialog that displays the items currently in the cart, with options to remove items and view the total cost. Also provides buttons for "Checkout" and "Add Another" actions.
Props:
open: Boolean value to control the modal visibility.
handleClose: Function to handle closing the modal.
cartItems: Array of items currently in the cart.
removeFromCart: Function to handle removing items from the cart.
total: Object containing total prices in USD and Satoshis.
src/components/Layout.js
Description: A layout component that wraps the main content of the application. It includes a header, footer, and cart icon for opening the cart modal.
Props:
cartCount: Number of items in the cart.
openCart: Function to open the cart modal.
connectWallet: Function to connect the user's wallet.
src/data/products.js
Description: Contains a mock list of NFT products used in the application. Each product includes an ID, name, image URL, price in USD, and price in Satoshis.
Exports:
products: Array of product objects.
Design Layout
Color Scheme: The app uses a dark theme with primary colors being #101316 for backgrounds, #FF7800 for accents, and #B4986B for buttons.
Typography: Text colors and sizes are adjusted to match the dark theme and ensure readability.
Modal Dialog: The cart modal displays items with thumbnails, prices, and a delete button. It also shows the total amount and has "Checkout" and "Add Another" buttons.
Known Issues
Incomplete Design Integration: The app layout is not fully integrated and may not align perfectly with the final design specifications.
Minor Issues:
Some elements may not be styled to match the final design.
Responsive design issues may need addressing to ensure compatibility across different devices.
Functionality for connecting an actual wallet is mocked and needs to be integrated with a real wallet provider.
Performance Considerations: Additional optimizations may be required for performance improvements, especially in handling large amounts of product data.
Future Improvements
Design Refinements: Complete the integration of the final design layout.
Wallet Integration: Implement a real wallet connection mechanism.
Responsive Design: Address any responsiveness issues to ensure the app works well on various devices.
Testing: Add comprehensive tests to ensure the app functions correctly and to prevent future regressions.
Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: Code Splitting

Analyzing the Bundle Size
This section has moved here: Analyzing the Bundle Size

Making a Progressive Web App
This section has moved here: Making a Progressive Web App

Advanced Configuration
This section has moved here: Advanced Configuration

Deployment
This section has moved here: Deployment

npm run build fails to minify
This section has moved here: npm run build fails to minify

License
This project is licensed under the MIT License.
