import db from "../until/alaSqlSetup";
//created table user

class UserModel{
    //created table user

    static create(...user){
        db.exec('INSERT INTO Users (Nome, Cargo, Token) VALUES (?, ?, ?)', [ user[0], user[1], user[2]]);
        db.exec("SELECT * FROM Users",  [], function(res){
            console.log(res);
        });
        
    }

    static update(user){
        db.exec('UPDATE Users SET token = ? WHERE Id = ?', [user.token, user.cpf])
    }
    
    static find(user){
        return db.exec('SELECT * FROM Users WHERE Nome = ?', [user.nome])
    }   

    static delete(user){
        db.exec('DELETE FROM Users WHERE Id = ?', [user.cpf])
    }
}

    
export default UserModel