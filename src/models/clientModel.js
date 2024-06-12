import alasql from "../until/alaSqlSetup";
//created table client

class Client{

    static create(...client){
        alasql.promise(`INSERT INTO Client (nome, cpf,
             dataNacimento, telefone, celular, token) 
            VALUES (?, ?, ?, ?, ?, ?)`, [client[0], client[1], client[2], client[3], client[4], client[5] ]) .then(() => {
                console.log('Cliente adicionado com sucesso!');
               alert("Cliente adicionado com sucesso");
              })
              .catch((error) => {
                alert("Ops! Algo de errado esta certo")
                console.error('Erro ao adicionar cliente:', error);
              });
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