export async function handler(event, context) {
  try {
    const API_KEY = process.env.BILLGANG_API_KEY;
    const SHOP_ID = process.env.BILLGANG_SHOP_ID;

    const res = await fetch(`https://pg-api.billgang.com/v1/dash/shops/${SHOP_ID}/products`, {
      headers: { Authorization: `Bearer ${API_KEY}` }
    });

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ errorMessage: "Fetch failed", errorType: error.toString() })
    };
  }
}
