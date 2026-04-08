import { Router } from 'express';
import { createShortUrl, getAllUrls } from '../controllers/urlController.js';

const router = Router();

// GET /shorten/urls
router.get('/urls', getAllUrls);

// POST /shorten
router.post('/', createShortUrl);

export default router;