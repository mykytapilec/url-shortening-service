import { Router } from 'express';
import { createShortUrl } from '../controllers/urlController.js';

const router = Router();

// POST /shorten
router.post('/', createShortUrl);

export default router;