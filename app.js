const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI1NDcwNjA0MCIsImN1c3RvbWVyIjoiRmFsc2UiLCJleHAiOjE3NjkzNDQ3ODV9.OWI2m73OYgVqwoPgMqktYH497Z8DsjuJMAZE3iXo2qI";
const SHOP_ID = "75419f62-22d4-48a1-be07-a23c4f818be7";

fetch(`https://api.billgang.com/v1/shops/${SHOP_ID}/products`, {
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
})
.then(res => res.json())
.then(data => {
  const container = document.getElementById("product-list");

  data.products.forEach(product => {
    container.innerHTML += `
      <div class="bg-gray-900 p-6 rounded-xl">
        <h4 class="text-xl font-semibold">${product.name}</h4>
        <p class="text-gray-400 mt-2">${product.description || ""}</p>
        <p class="mt-4 font-bold">${product.price} €</p>
        <a href="${product.checkout_url}"
           class="block mt-4 bg-indigo-600 text-center py-2 rounded-lg hover:opacity-90">
          Comprar
        </a>
      </div>
    `;
  });
});
