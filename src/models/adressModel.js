import alasql from "../until/alaSqlSetup";

class AdressModel{

    static async create(...adress){

        console.log(adress);
        await alasql("INSERT INTO Adress (CEP, Rua, Bairro, Cidade, Estado, Pais, CPFCliente, EnderecoPrincipal) VALUE ('"+adress[0]+"', '"+adress[1]+"', '"+adress[2]+"', '"+adress[3]+"', '"+adress[4]+"', '"+adress[5]+"', '"+adress[6]+"', '"+adress[7]+"')");
    }

    static async read(adress){
        return await alasql("SELECT * FROM Adress WHERE CPFUser = '"+adress+"'");
    }

    static async getAll(){
        //return await alasql.promise('SELECT Client.is, Adress.* FROM Client JOIN Adress ON Client.cpf = Adress.CPFCliente');
        return alasql('SELECT Client.cpf AS clientId, Client.nome AS clientNome, Adress.id AS id, Adress.CEP AS clientCep, Adress.Rua AS clientRua, Adress.Bairro AS clientBairro, Adress.Cidade AS clientCidade, Adress.Estado AS clientEstado, Adress.Pais AS clientPais FROM Client JOIN Adress ON Client.cpf = Adress.CPFCliente');
    }

    static async delete(userCPF, id){
        return await alasql("DELETE FROM Adress WHERE CPFCliente ='"+userCPF+"' AND Rua = '"+id+"'");
    }
    
    
    
}

export default AdressModel;