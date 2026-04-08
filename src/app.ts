import express from 'express';
import urlRoutes from './routes/urlRoutes.js';
import { redirectToOriginal } from './controllers/urlController.js';

const app = express();

app.use(express.json());

// API routes
app.use('/shorten', urlRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('URL Shortening Service API is running');
});

// Redirect
app.get('/:code', redirectToOriginal);

export default app;