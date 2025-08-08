const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();
const PORT = 3000;

// Replace with your backend-service EXTERNAL IP
const BACKEND_URL = 'http://20.255.218.104';

app.get('/', (req, res) => {
  res.send('Welcome to the Frontend Service!');
});

app.get('/api/data', async (req, res) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/data`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).send('Error fetching data from backend');
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/users`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).send('Error fetching users from backend');
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});

// console.log("CI/CD test deploy v6");


