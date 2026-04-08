import express from 'express';
import urlRoutes from './routes/urlRoutes.js';

const app = express();

app.use(express.json());
app.use('/shorten', urlRoutes);

app.get('/', (req, res) => {
  res.send('URL Shortening Service API is running');
});

export default app;