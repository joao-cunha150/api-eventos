const express = require('express');
const router = express.Router();

const { protect } = require('../middlewares/authMiddleware');

const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');

/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Criar evento
 *     tags:
 *       - Eventos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Evento criado
 *       401:
 *         description: Não autorizado
 */
router.post('/', protect, createEvent);

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Listar eventos
 *     tags:
 *       - Eventos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de eventos
 *       401:
 *         description: Não autorizado
 */
router.get('/', protect, getEvents);

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     summary: Atualizar evento
 *     tags:
 *       - Eventos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Evento atualizado
 *       404:
 *         description: Evento não encontrado
 */
router.put('/:id', protect, updateEvent);

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     summary: Excluir evento
 *     tags:
 *       - Eventos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Evento removido
 *       404:
 *         description: Evento não encontrado
 */
router.delete('/:id', protect, deleteEvent);

module.exports = router;