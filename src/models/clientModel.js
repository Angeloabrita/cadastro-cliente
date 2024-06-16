import alasql from "../until/alaSqlSetup";
//created table client

class ClientModel{

    static create(...client){

         //ha um bug no plugin alaSQL quando se persiste os dados tanto no Localsotrage e no IndexDB ele inigira chave primaria e valores default
        // para contornar isso, fiz uma simples gambiarrar para verificar o usuario usando fazendo uma busca e verificando usando condicional e somente apos isso ele faz a inserção

         this.find(client[1]).then(function(res){
            //console.log(res);
            if(res.length === 0){
                alasql.promise("INSERT INTO Client (nome, cpf, dataNacimento, telefone, celular) VALUES ('"+client[0]+"','"+client[1]+"', '"+client[2]+"', '"+client[3]+"', '"+client[4]+"')").then(() => {
                    console.log('Cliente adicionado com sucesso!');
                   alert("Cliente adicionado com sucesso");
                  })
                  .catch((error) => {
                    alert("Ops! Algo de errado esta certo")
                    console.error('Erro ao adicionar cliente:', error);
                  });
               
            }
            else{
                
                alert("CPF ja foi cadastrado");
                console.log("CPF ja foi cadastrado no sistema");

            }

        }).catch(function(err){
            console.log('error:', err);
        });





        
    }

      static async find(client){
        return await alasql('SELECT * FROM Client WHERE cpf = ?', [client])
    }

    static update(client){
        alasql('UPDATE Client SET token = ? WHERE CPF = ?', [client.token, client.cpf])
    }   

    static delete(client){
        alasql('DELETE FROM Client WHERE CPF = ?', [client.cpf])
    }
}

export default ClientModel;