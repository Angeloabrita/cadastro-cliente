import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModel from '../models/User.js';

/////////
//ATENCAO
/////////
// isso é só um exemplo de como registrar no banco em conformidade com os pilares da segurança da informação
// O correto seria salvar o secret no backend em uma variavel ambiente
const secret = 'abreockosAAGTp125@';

class AuthService {
    static async register(username, password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      UserModel.create({ username, password: hashedPassword, token: null });
    }
  
    static async login(username, password) {
      const user = UserModel.findByUsername(username);
      if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username }, secret, { expiresIn: '1h' });
        UserModel.updateToken(username, token);
        return token;
      
      throw new Error('Usuario nao encontrado ou senha errada');
    }
  
    static verifyToken(token) {
      try {
        return jwt.verify(token, secret);
      } catch (e) {
        throw new Error('Invalid token');
      }
    }
  }
  
  export default AuthService;