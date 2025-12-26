fetch("/.netlify/functions/getProducts")
  .then(res => res.json())
  .then(data => {
    console.log(data); // Vemos qué devuelve la API
    const container = document.getElementById("product-list");

    const products = data.products || data.data || []; 

    products.forEach(product => {
      container.innerHTML += `
        <div class="bg-gray-900 p-6 rounded-xl">
          <h4 class="text-xl font-semibold">${product.name}</h4>
          <p class="text-gray-400 mt-2">${product.description || ""}</p>
          <p class="mt-4 font-bold">${product.price?.amount || "—"} €</p>
          <a href="${product.checkout_url || "#"}"
             class="block mt-4 bg-indigo-600 text-center py-2 rounded-lg hover:opacity-90">
            Comprar
          </a>
        </div>
      `;
    });
  })
  .catch(err => console.error("Error fetching products:", err));
