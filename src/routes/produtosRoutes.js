import Controller from '../controllers/produtosController.js';
import express from  'express';

const router = express.Router();

router.get('/', Controller.getAll);
router.get('/:id', Controller.getById);
router.post('/', Controller.create)
router.put('/:id', Controller.update)
router.delete('/:id', Controller.delete)

export default router;