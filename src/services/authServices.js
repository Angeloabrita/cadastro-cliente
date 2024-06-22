import UserModel from '../models/userModel';
import bcrypt from 'bcryptjs-react';
import alasql from 'alasql';

class AuthService {
  static register(username, cargo, password) {
    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      UserModel.create(username, cargo, hashedPassword);
    } catch (e) {
      console.log(e);
    }
  }

  static async login(username, password) {
    try {
      const res = await alasql.promise('SELECT * FROM Users WHERE Nome = ?', [username]);
      if (res.length > 0) {
        const user = res[0];
        const result = await bcrypt.compare(password, user.Token);
        if (result) {
          console.log('Login successful');
          alert("Login com sucesso");

        //verifica se o usuaria esta na tabela  Authentication cria ou atualiza o status
         const auth = await alasql.promise('SELECT * FROM Authentication WHERE UserNome = ?', [username]);
          if (auth.length === 0) {
            await alasql.promise('INSERT INTO Authentication (UserNome, Status) VALUES (?, ?)', [username, "loged"]);
          }
          await alasql.promise('UPDATE Authentication SET Status = ? WHERE UserNome = ?', ["loged", username]);
          return true;
        } else {
          alert("Senha ou usuario Incorretos");
          console.log('Invalid credentials');
          await alasql.promise('UPDATE Authentication SET Status = ? WHERE UserNome = ?', ["logout", username]);
          return false;
        }
      } else {
        console.log('User not found');
        return false;
      }
    } catch (error) {
      console.error('Erro no login:', error);
      return false;
    }
  }

  static async logout(username) {
    try {
      await alasql.promise('UPDATE Authentication SET Status = ? WHERE UserNome = ?', ["logout", username]);
      console.log('Logout successful' + username);
    } catch (error) {
      console.error('Erro no logout:', error);
    }
  }

  static async isLoged() {
    try {

      //verifica a tabela authentication e retorna true se o ultimo usuario estiver loged
      const result = await alasql.promise('SELECT * FROM Authentication');
      if (result.length > 0 && result[0].Status === "loged") {
        console.log(result);
        return result;
      }
      return [];
    } catch (error) {
      console.error('Erro ao verificar login:', error);
      return false;
    }
  }
}

export default AuthService;
