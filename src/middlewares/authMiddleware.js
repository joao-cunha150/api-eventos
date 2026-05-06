const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  // Verificar se o token existe no header Authorization
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Pega o token (formato: "Bearer TOKEN_AQUI")
      token = req.headers.authorization.split(' ')[1];
      
      // Verifica se o token é válido
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Busca o usuário no banco e remove a senha
      req.user = await User.findById(decoded.id).select('-password');
      
      if (!req.user) {
        return res.status(401).json({ message: 'Usuário não encontrado' });
      }
      
      next(); // Permite seguir para a próxima função (rota)
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Token inválido ou expirado' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido' });
  }
};

module.exports = { protect };