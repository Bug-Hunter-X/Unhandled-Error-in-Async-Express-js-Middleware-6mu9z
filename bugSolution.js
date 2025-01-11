const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  setTimeout(() => {
    try {
      console.log('Processing data:', data);
      if (data.someProperty === 'error') {
        throw new Error('Something went wrong!');
      }
      res.status(200).json({ message: 'Data received successfully' });
    } catch (error) {
      console.error('Error processing data:', error);
      res.status(500).json({ error: 'Failed to process data' });
    }
  }, 5000); 
});
app.listen(3000, () => console.log('Server listening on port 3000'));