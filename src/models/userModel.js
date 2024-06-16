import alasql from "../until/alaSqlSetup";
//created table user

class UserModel{
   
    static async create(...user){
        //ha um bug no plugin alaSQL quando se persiste os dados tanto no Localsotrage e no IndexDB ele inigora chave primaria e valores defout
        // para contornar isso, fiz uma simples gambiarrar para verificar o usuario usando fazendo uma busca e verificando usando condicional

        this.find(user[0]).then(function(res){
            console.log(res);
            if(res.length === 0){
                alasql.promise("INSERT INTO Users (Nome, Cargo, Token) VALUES ('"+user[0]+"', '"+user[1]+"', '"+user[2]+"')").then(function(res){

                    alert("Usuario criado com sucesso");
                    console.log("Usuario criado com sucesso");
                
               }).catch(function(err){
                    console.log('error:', err);
                   
               });
               
            }
            else{
                
                alert("Usuario ja existe");
                console.log("Usuario ja existe");

            }

        }).catch(function(err){
            console.log('error:', err);
        });
        
    }

     //return data from user
   static async find(user){
    try{
     const result = await alasql('SELECT * FROM Users WHERE Nome = ?', [user]);
     return result;
    }
    catch(err){
     console.log(err);
    }    
 }

    static async update(user){
       return await alasql('UPDATE Users SET token = ? WHERE Id = ?', [user.token, user.cpf])
    }
    
   
    static async delete(user){
        return await alasql('DELETE FROM Users WHERE Id = ?', [user.id])
    }
}

    
export default UserModel