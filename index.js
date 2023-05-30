const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const radius = parseFloat(req.query.radius);
  if (!isNaN(radius)) {
    const area = Math.PI * radius * radius;
    res.send(`Claudia yakomina sarempaa \n`);
    res.send(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
  } else {
    res.send(`Claudia yakomina sarempaa \n`);
    res.send('Please provide a radius parameter in your query string');
  }
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
