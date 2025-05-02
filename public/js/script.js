async function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const category   = document.getElementById('categoryFilter').value;
    const store      = document.getElementById('storeFilter').value;
    const sort       = document.getElementById('sortFilter').value;
  
    document.getElementById('resultsContainer').innerHTML = `
      <div class="col-span-3 flex flex-col items-center py-12">
        <i class="fas fa-spinner fa-spin text-4xl text-green-500 mb-4"></i>
        <p>Searching products...</p>
      </div>
    `;
  
    try {
      const url = `/api/products?search=${encodeURIComponent(searchTerm)}&category=${category}&store=${store}&sort=${sort}`;
      const res = await fetch(url);
      const { results } = await res.json();
  
      const lowestPrices = {};
      results.forEach(p => {
        if (!lowestPrices[p.name] || p.price < lowestPrices[p.name]) {
          lowestPrices[p.name] = p.price;
        }
      });

      const filtered = searchTerm
        ? results.filter(p => p.name.toLowerCase().includes(searchTerm))
        : results;
  
      displayResults(filtered, lowestPrices);
    } catch (err) {
      console.error(err);
      document.getElementById('resultsContainer').innerHTML = `
        <div class="col-span-3 text-center py-12">
          <i class="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
          <h3 class="text-xl font-semibold">Oops! Something went wrong.</h3>
        </div>
      `;
    }
  }
  
  function displayResults(products, lowestPrices) {
    const container = document.getElementById('resultsContainer');
    if (products.length === 0) {
      container.innerHTML = `
        <div class="col-span-3 text-center py-12">
          <i class="fas fa-exclamation-circle text-4xl text-gray-400 mb-4"></i>
          <h3 class="text-xl font-semibold">No products found</h3>
          <p class="text-gray-500">Try adjusting your filters</p>
        </div>
      `;
      return;
    }
  
    let html = '';
    products.forEach(product => {
      const isCheapest = product.price === lowestPrices[product.name];
      html += `
        <div class="product-card bg-white rounded-xl overflow-hidden shadow-md">
          <div class="relative h-48 bg-gray-100 flex items-center justify-center p-4">
            <img src="${product.imageUrl}" alt="${product.name}" class="h-full object-contain"
                 onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
            <span class="absolute top-2 right-2 text-xs text-white px-2 py-1 rounded-full 
                         ${product.store.toLowerCase() === 'walmart' ? 'walmart-badge' : 'kroger-badge'}">
              ${product.store}
            </span>
            ${isCheapest ? `
              <span class="absolute top-2 left-2 text-xs text-white px-2 py-1 rounded-full cheapest-tag">
                <i class="fas fa-tag mr-1"></i>Cheapest Price
              </span>` : ''}
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg mb-1">${product.name}</h3>
            <p class="text-gray-600 text-sm mb-2">${product.description}</p>
            <div class="flex justify-between items-center mt-4">
              <div>
                <span class="text-2xl font-bold text-gray-800">$${product.price.toFixed(2)}</span>
                ${product.originalPrice ? `
                  <span class="text-sm text-gray-400 line-through ml-2">
                    $${product.originalPrice.toFixed(2)}
                  </span>` : ''}
              </div>
              <span class="text-sm text-gray-500">${product.weight}</span>
            </div>
          </div>
        </div>
      `;
    });
  
    container.innerHTML = html;
  }
  
  window.addEventListener('DOMContentLoaded', searchProducts);
  