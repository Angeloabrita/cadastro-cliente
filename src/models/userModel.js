import AlaSQL from "../until/alasqlsetup"

class UserModel{

    static create(user){
        AlaSQL('INSERT INTO Users (Id, Nome, Cargo, token) VALUES (?, ?, ?, ?)', [user.id, user.name, user.cargo, user.token])
    }

    static update(user){
        AlaSQL('UPDATE Users SET token = ? WHERE Id = ?', [user.token, user.cpf])
    }
    
    static find(user){
        return AlaSQL('SELECT * FROM Users WHERE Nome = ?', [user.nome])
    }   

    static delete(user){
        AlaSQL('DELETE FROM Users WHERE Id = ?', [user.cpf])
    }
}

    
export default UserModel