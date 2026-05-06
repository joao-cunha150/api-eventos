const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'O título é obrigatório'],
    trim: true,
    maxlength: [100, 'Título deve ter no máximo 100 caracteres']
  },
  description: {
    type: String,
    required: [true, 'A descrição é obrigatória'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'A data é obrigatória']
  },
  location: {
    type: String,
    required: [true, 'O local é obrigatório'],
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true // Cria automaticamente createdAt e updatedAt
});

module.exports = mongoose.model('Event', EventSchema);