const express = require('express');

const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/status', (req, res) => {
	axios.get('https://api.cartolafc.globo.com/mercado/status')
  .then(response => {
    res.send({ data: response.data });
  })
  .catch(error => {
    res.send({ data: error });
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));