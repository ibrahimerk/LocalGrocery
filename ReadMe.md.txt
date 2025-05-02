Huntsville Grocery Price Comparison

A simple web application to compare grocery prices between Walmart and Kroger for selected products in Huntsville, TX. Built with Node.js, Express, and a modern Tailwind CSS front-end.

Table of Contents

Features

Tech Stack

Prerequisites

Installation

Usage

Live Demo

Project Structure

Deployment

Contributing

License

Features

Compare prices of 10 products each from Walmart and Kroger.

Category, store, and sort filters (price ascending/descending).

Highlight the cheapest price per product.

Responsive design using Tailwind CSS.

Dynamic image loading based on Kroger UPC codes.

Tech Stack

Frontend: HTML5, Tailwind CSS, Font Awesome, Vanilla JavaScript

Backend: Node.js, Express

Data: Static JSON files for Walmart and Kroger product listings

Prerequisites

Node.js v14+ installed

npm (Node Package Manager)

Installation

Clone the repository:

git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

Install dependencies:

npm install

Start the server:

npm start

Open your browser and navigate to http://localhost:3000.

Usage

Use the search bar to find products by name.

Filter by category or store (Walmart/Kroger).

Sort results by price (low to high or high to low).

The cheapest product card will be marked with an "Cheapest" badge.

Live Demo

Access the live version of the app at: https://huntsville-grocery.onrender.com

Project Structure

├── public
│   ├── css
│   │   └── style.css
│   ├── data
│   │   ├── kroger.json
│   │   └── walmart.json
│   ├── images
│   │   ├── kroger
│   │   └── walmart
│   ├── js
│   │   └── script.js
│   └── index.html
├── scripts
│   └── download_walmart_images.js
├── server.js
├── package.json
└── README.md

Deployment

This application is deployed on Render. To deploy your own version:

Push your code to a GitHub repository.

Sign up at Render and connect your GitHub account.

Create a new Web Service, select your repo, and configure:

Build Command: npm install

Start Command: npm start

Deploy and access your live URL.

Contributing

Contributions are welcome! Feel free to:

Open an issue to report bugs or suggest features.

Fork the repo and submit a pull request with improvements.

License

This project is licensed under the MIT License. See the LICENSE file for details.