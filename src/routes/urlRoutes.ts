import { Router } from 'express';

const router = Router();

// Заготовка маршрутов CRUD для URL
router.get('/', (req, res) => {
  res.send('URL Routes Working');
});

export default router;