module.exports = async (req, res) => {
  const params = new URLSearchParams(req.query).toString();
  const response = await fetch(`https://keyauth.win/api/1.0/?${params}`);
  const data = await response.text();
  res.send(data);
};