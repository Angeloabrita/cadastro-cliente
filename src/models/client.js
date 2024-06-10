import AlaSQL from "../until/alasqlsetup"

class Client{

    static create(client){
        AlaSQL('INSERT INTO Client (CPF, NomeCompleto, DataNascimento, Telefone, Celular, token) VALUES (?, ?, ?, ?, ?, ?)', [client.cpf, client.dataNascimento, client.telefone, client.celular, client.token])
    }

    static find(client){
        return AlaSQL('SELECT * FROM Client WHERE CPF = ?', [client.cpf])
    }

    static update(client){
        AlaSQL('UPDATE Client SET token = ? WHERE CPF = ?', [client.token, client.cpf])
    }   

    static delete(client){
        AlaSQL('DELETE FROM Client WHERE CPF = ?', [client.cpf])
    }
}

export default Client;