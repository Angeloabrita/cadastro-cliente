import alasql from "../until/alaSqlSetup";
//created table user

class UserModel{
    //created table user

    static create(...user){
        console.log(user);
        alasql.promise('INSERT INTO Users (Nome, Cargo, Token) VALUES (?, ?, ?)', [ user[0], user[1], user[2]]).then(function(res){
            console.log(res);
       }).catch(function(err){
            console.log('error:', err);
       });
      
       alasql.promise("SELECT * FROM Users",  [], function(res){
            console.log(res);
        }).then(function(res){
            console.log(res);
       }).catch(function(err){
            console.log('error:', err);
       });
        
    }

    static update(user){
        alasql('UPDATE Users SET token = ? WHERE Id = ?', [user.token, user.cpf])
    }
    
    async find(user){
       try{
        const result = await alasql('SELECT * FROM Users WHERE Nome = ?', [user]);
        return result;
       }
       catch(err){
        console.log(err);
       }    
    }
    static delete(user){
        alasql('DELETE FROM Users WHERE Id = ?', [user.id])
    }
}

    
export default UserModel