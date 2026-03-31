//pour cacher ma cle api dans le code source de mon site, j'ai créé une api route qui va faire la requete a l'api météo et me retourner les données météo, ainsi je n'ai pas besoin de mettre ma cle api dans le code source de mon site, elle est caché dans le code de mon api route

//api/route

export default async function handler(req, res) {
  const city = req.query.city;

  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&aqi=no&days=4`
  );

  const data = await response.json();

  res.status(200).json(data);
}