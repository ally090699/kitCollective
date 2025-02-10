const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For cross-origin requests
const cors = require('cors');
app.use(cors());

const csvFilePath = 'submissions.csv';

const appendToCSV = (data) => {
  const csvData = `${data.name},${data.phone || 'Not provided'},${data.email},${data.status || 'Not selected'},${data.productID || 'Not provided'},${data.message}\n`;
  fs.appendFile(csvFilePath, csvData, (err) => {
    if (err) {
      console.error('Error writing to CSV file:', err);
      // Send failure response in case of error
      return;
    }
  });
};

/*app.post('/submit', (req, res) => {
  const formData = req.body;
  
  // Assuming validation is handled here as well (can add more checks)
  if (!formData.name || !formData.email || !formData.message) {
    return res.status(400).json({ message: 'Required fields are missing.' });
  }

  appendToCSV(formData);

  // Send success response
  res.status(200).json({ message: 'Form submitted successfully' });
});*/

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
