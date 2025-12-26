export async function handler(event, context) {
  const API_KEY = process.env.BILLGANG_API_KEY;
  const SHOP_ID = process.env.BILLGANG_SHOP_ID;

  const res = await fetch(`https://api.billgang.com/v1/shops/${SHOP_ID}/products`, {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
