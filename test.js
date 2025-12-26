import fetch from "node-fetch";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI1NDcwNjA0MCIsImN1c3RvbWVyIjoiRmFsc2UiLCJleHAiOjE3NjkzNDQ3ODV9.OWI2m73OYgVqwoPgMqktYH497Z8DsjuJMAZE3iXo2qI";
const SHOP_ID = "75419f62-22d4-48a1-be07-a23c4f818be7";

async function testBillgang() {
  try {
    const res = await fetch(`https://pg-api.billgang.com/v1/dash/shops/${SHOP_ID}/products`, {
      headers: { Authorization: `Bearer ${API_KEY}` }
    });

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

testBillgang();
