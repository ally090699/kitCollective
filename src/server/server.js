const express = require("express");
const { Client } = require("pg");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(cors());

const client = new Client({
  user: "kitcollectivesubmissions_user",
  host: "dpg-cul1ura3esus73b2i9s0-a.ohio-postgres.render.com", 
  database: "kitcollectivesubmissions", 
  password: "SkiEb6JmWbFFvnn7XlnZc9bW1edjsL8C",
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Disable SSL certificate validation (only on Render; o/w/ unsafe)
  },
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch(err => console.error('Error connecting to the database:', err.stack));

app.post("/submit", (req, res) => {
  console.log('Form data:', req.body);
  const { name, phone, email, status, productID, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Required fields are missing." });
  }

  const query = `
    INSERT INTO submissions (name, phone, email, status, product_id, message)
    VALUES ($1, $2, $3, $4, $5, $6)
  `;

  const values = [name, phone || 'Not provided', email, status || 'Not selected', productID || 'Not provided', message];

  client
    .query(query, values)
    .then(() => {
      res.status(200).json({ message: "Form submitted successfully" });
    })
    .catch((err) => {
      console.error("Error inserting data into PostgreSQL:", err);
      res.status(500).json({ message: "There was an error submitting the form. Please try again later." });
    });
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
