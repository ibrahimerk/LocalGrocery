const express = require('express');
const path    = require('path');
const fs      = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const krogerData  = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data/kroger.json')));
const walmartData = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data/walmart.json')));
const allProducts = [
  ...krogerData.map(p => ({ ...p, store: 'Kroger' })),
  ...walmartData.map(p => ({ ...p, store: 'Walmart' }))
];

app.get('/api/products', (req, res) => {
  let { search = '', category = '', store = '', sort = '' } = req.query;
  search   = search.toLowerCase();
  category = category.toLowerCase();
  store    = store.toLowerCase();

  let results = allProducts.filter(p => {
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (category && p.category.toLowerCase() !== category) return false;
    if (store && p.store.toLowerCase() !== store) return false;
    return true;
  });

  if (sort === 'price-asc')  results.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') results.sort((a, b) => b.price - a.price);

  res.json({ results });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
