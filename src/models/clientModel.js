import alasql from "../until/alaSqlSetup";
//created table client

class Client{

    static create(client){
        alasql('INSERT INTO Client (CPF, NomeCompleto, DataNascimento, Telefone, Celular, token) VALUES (?, ?, ?, ?, ?, ?)', [client.cpf, client.dataNascimento, client.telefone, client.celular, client.token])
    }

     find(client){
        return alasql('SELECT * FROM Client WHERE CPF = ?', [client.cpf])
    }

    static update(client){
        alasql('UPDATE Client SET token = ? WHERE CPF = ?', [client.token, client.cpf])
    }   

    static delete(client){
        alasql('DELETE FROM Client WHERE CPF = ?', [client.cpf])
    }
}

export default Client;