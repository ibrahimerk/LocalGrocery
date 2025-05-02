# Final Project Report: Huntsville Grocery Price Comparison

## Abstract
This report presents the culmination of the Huntsville Grocery Price Comparison project, which enables users to compare prices of selected products across Walmart and Kroger stores in Huntsville, TX. Key features include category and store filters, price sorting, and visual indication of the lowest price per product. The application is built with a Node.js/Express backend, static JSON data, and a responsive Tailwind CSS front end. Deployment is automated via GitHub and Render.com.

## Introduction
Consumers often struggle to identify the best deals at different grocery retailers. This project addresses that challenge by providing a simple web interface where users can search, filter, and compare the prices of common grocery items between two major chains: Walmart and Kroger. The platform highlights the cheapest option for each product, helping users make informed purchasing decisions.

## Objectives
- **Price Comparison**: Present side-by-side pricing of 10 Walmart and 10 Kroger products.
- **Interactive Filters**: Allow filtering by category (e.g., dairy, bakery, produce, meat), store, and sorting by price.
- **Responsive Design**: Ensure usability on various devices using Tailwind CSS.
- **Automated Deployment**: Use GitHub integration and Render.com's free tier for continuous deployment.

## System Architecture
The application follows a classic client-server model:
1. **Client (Front End)**: Static HTML, Tailwind CSS for styling, and vanilla JavaScript for dynamic interactions.
2. **Server (Back End)**: Express.js serves static files and provides a `/api/products` endpoint that returns filtered and sorted product data from JSON files.
3. **Data Layer**: Two JSON files (`walmart.json` and `kroger.json`) containing product metadata and image URLs (Kroger images generated from UPC codes, Walmart images stored locally).
4. **Deployment**: Hosted on Render.com, automatically rebuilding and redeploying upon GitHub commits.

## Data Sources
- **Kroger Data**: Manually curated list of 10 Kroger-branded items with UPC codes and dynamically generated image URLs.
- **Walmart Data**: Manually curated list of 10 Walmart items with pre-existing image URLs, later downloaded and served locally for reliability.

## Backend Implementation
- **Express Setup**: `server.js` initializes an Express app, sets up static file serving, and defines the `/api/products` route.
- **Filtering & Sorting**: Query parameters (`search`, `category`, `store`, `sort`) are parsed and applied to the merged product array. Sorting supports ascending and descending price orders.
- **Image URL Generation**: For Kroger products, `imageUrl` fields are constructed as `https://www.kroger.com/product/images/large/front/{upc}`; Walmart images are referenced from local `public/images/walmart` directory.

## Frontend Implementation
- **HTML Structure**: `index.html` includes a hero banner, search input, filter dropdowns, and a results grid.
- **Tailwind CSS**: Ensures a modern, responsive design with minimal custom CSS for badges and transitions.
- **Dynamic Script**: `script.js` fetches product data, calculates the lowest price per product, filters client-side by search term, and renders product cards with badges for store and “Cheapest” when applicable.

## Image Handling
- **Kroger Images**: Sourced in real time via UPC-based URLs. Fallback to placeholder when loading fails.
- **Walmart Images**: Bulk-downloaded via a Node.js script (`scripts/download_walmart_images.js`) and served locally to avoid CORS and network reliability issues.

## Deployment
1. **Version Control**: Project code maintained on GitHub in the `main` branch.
2. **Render Integration**: Connected GitHub repo to Render.com; defined build (`npm install`) and start (`npm start`) commands.
3. **Continuous Deployment**: Every GitHub push to `main` triggers an automatic rebuild and redeploy, ensuring the live demo at `https://huntsville-grocery.onrender.com` is up to date.

## Testing and Validation
- **Unit Testing**: Manual testing of API filtering and sorting via `curl` and browser tools.
- **Functional Testing**: Verified UI elements, filter interactions, and responsive behavior across desktop and mobile viewports.
- **Image Verification**: Confirmed correct image loading for each product and proper fallback handling.

## User Guide
1. **Access the App**: Navigate to the live demo URL.
2. **Search**: Type a keyword (e.g., "milk") and click the search icon.
3. **Filter**: Use dropdowns to select category or store.
4. **Sort**: Choose price ascending or descending.
5. **Interpret**: Look for the green “Cheapest” badge on the cheapest product card.

## Challenges and Solutions
- **Image Reliability**: Kroger’s dynamic URLs sometimes returned errors. Resolved by adding `onerror` fallback and hosting Walmart images locally.
- **Filter Consistency**: Duplicate `id` attributes in HTML caused unexpected behavior. Fixed by consolidating dropdown IDs.
- **UPCs Accuracy**: Retrieving correct UPC codes required inspecting Kroger product pages and adjusting JSON data accordingly.

## Future Improvements
- **Additional Stores**: Integrate more retailers (e.g., Target, Publix).
- **Real-Time Data**: Scrape live prices or use official APIs for up-to-date information.
- **User Accounts**: Save favorite products and custom watchlists.
- **Price Alerts**: Email or SMS notifications when selected products drop below a threshold.

## Conclusion
The Huntsville Grocery Price Comparison application demonstrates a full-stack web solution that aids consumers in making cost-effective grocery purchases. Built with open-source technologies and deployed on a free hosting tier, it offers a blueprint for scalable, user-centric price comparison tools.

---
*Report generated May 2, 2025*
