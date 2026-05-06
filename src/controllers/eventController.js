const Event = require('../models/Event');

// @desc    Criar um novo evento
// @route   POST /api/events
// @access  Privado (precisa estar logado)
exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;

    // Validação básica
    if (!title || !description || !date || !location) {
      return res.status(400).json({ 
        message: 'Todos os campos são obrigatórios: title, description, date, location' 
      });
    }

    // Criar evento associado ao usuário logado (req.user vem do middleware)
    const event = await Event.create({
      title,
      description,
      date,
      location,
      user: req.user._id
    });

    res.status(201).json({
      success: true,
      data: event
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Erro ao criar evento', 
      error: error.message 
    });
  }
};

// @desc    Listar todos os eventos do usuário logado
// @route   GET /api/events
// @access  Privado
exports.getEvents = async (req, res) => {
  try {
    // Busca apenas eventos do usuário atual
    const events = await Event.find({ user: req.user._id }).sort({ date: 1 });
    
    res.json({
      success: true,
      count: events.length,
      data: events
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Erro ao buscar eventos', 
      error: error.message 
    });
  }
};

// @desc    Atualizar um evento específico
// @route   PUT /api/events/:id
// @access  Privado
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date, location } = req.body;

    // Buscar evento pelo ID
    let event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }

    // Verificar se o evento pertence ao usuário logado
    if (event.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ 
        message: 'Você não tem permissão para atualizar este evento' 
      });
    }

    // Atualizar o evento
    event = await Event.findByIdAndUpdate(
      id,
      { title, description, date, location },
      { new: true, runValidators: true } // new: retorna o documento atualizado
    );

    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Erro ao atualizar evento', 
      error: error.message 
    });
  }
};

// @desc    Deletar um evento
// @route   DELETE /api/events/:id
// @access  Privado
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar evento pelo ID
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }

    // Verificar se o evento pertence ao usuário logado
    if (event.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ 
        message: 'Você não tem permissão para deletar este evento' 
      });
    }

    // Deletar o evento
    await event.deleteOne();

    res.json({
      success: true,
      message: 'Evento removido com sucesso'
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Erro ao deletar evento', 
      error: error.message 
    });
  }
};