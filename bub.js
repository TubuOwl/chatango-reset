const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/.well-known/discord', async (req, res) => {
  try {
    const r = await fetch('https://bpa.st/raw/6GVOI');
    const text = await r.text();
    res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send(text);
  } catch (e) {
    res.status(502).type('text/plain').send('Failed to fetch verification');
  }
});

app.listen(3000);
