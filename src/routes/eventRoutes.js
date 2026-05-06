const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');

// ATENÇÃO: Todas as rotas abaixo precisam de autenticação
// O middleware 'protect' será executado antes de cada rota

router.post('/', protect, createEvent);      // Criar evento
router.get('/', protect, getEvents);        // Listar eventos
router.put('/:id', protect, updateEvent);   // Atualizar evento
router.delete('/:id', protect, deleteEvent);// Deletar evento

module.exports = router;