import { Router } from 'express';
import { createShortUrl, getUrlByCode } from '../controllers/urlController.js';

const router = Router();

// POST /shorten
router.post('/', createShortUrl);

// GET /shorten/:code
router.get('/:code', getUrlByCode);

export default router;