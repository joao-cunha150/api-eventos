const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('🔄 Tentando conectar ao MongoDB...');
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Erro na conexão: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;