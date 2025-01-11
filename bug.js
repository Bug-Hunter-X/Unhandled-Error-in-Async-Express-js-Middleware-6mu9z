const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data asynchronously
  setTimeout(() => {
    console.log('Processing data:', data);
    // Simulate a potential error
    if (data.someProperty === 'error') {
      throw new Error('Something went wrong!');
    }
    res.status(200).json({ message: 'Data received successfully' });
  }, 5000); // Simulate an asynchronous operation
});
app.listen(3000, () => console.log('Server listening on port 3000'));