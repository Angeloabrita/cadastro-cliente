
import UserModel from '../models/userModel';
import bcrypt from 'bcryptjs'
import alasql from 'alasql';
/////////
//ATENCAO
/////////
// isso é só um exemplo de como registrar no banco em conformidade com os pilares da segurança da informação
// Iguinore as bilões de falhas de seguran, iss é só para simular um login direto no front sem savar a senha no banco

class AuthService {
  static async register(username, cargo, password) {
    try{
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      UserModel.create( username, cargo, hashedPassword);
    }
    catch(e){
      console.log(e);
      alert("Erro ao cadastrar usuario")
    }
    
  }

  static async login(username, password) {
    try {
      //pequena gambi pois estava retornando undefined e eu sem net para tentar debugar o erro
      //go horse! TODO injeta com usermodel fix promise bug
      alasql.promise('SELECT * FROM Users WHERE Nome = ?', [username]).then(
        (res) => {
          if (res.length > 0) {

            const user = res[0];
            console.log(user);
            bcrypt.compare(password, user.Token, (err, result) => {
              if (result) {
                console.log('Login successful');
                alert("Login com sucesso");

                
                alasql('UPDATE Authentication SET Status = ? WHERE UserNome = ?', ["loged","nome"])
              } else {
                alert("Senha ou usuario Incorretos");
                console.log('Invalid credentials');
                alasql('UPDATE Authentication SET Status = ? WHERE UserNome = ?', ["logout","nome"])

              }
            });
          } else {
            console.log('User not found');
          }
        }
      );
      
    } catch (error) {
        console.error('Erro no login:', error);
    }
}



  
}
  export default AuthService;