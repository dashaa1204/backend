// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const response = await fetch(
    "https://dev.to/api/articles?top-1&per_page=4&state=fresh"
  );
  const data = await response.json();
  res.status(200).json(data);
}
