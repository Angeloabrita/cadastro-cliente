import alasql from "../until/alaSqlSetup";

class AdressModel{

    static async create(...adress){

        console.log(adress);
        await alasql("INSERT INTO Adress (CEP, Rua, Bairro, Cidade, Estado, Pais, CPFCliente, EnderecoPrincipal) VALUE ('"+adress[0]+"', '"+adress[1]+"', '"+adress[2]+"', '"+adress[3]+"', '"+adress[4]+"', '"+adress[5]+"', '"+adress[6]+"', '"+adress[7]+"')");
    }

    static async read(adress){
        return await alasql('SELECT * FROM Adress WHERE CPFUser = ?', [adress[0]]);
    }

    static async getAll(){
        return await alasql('SELECT Client.Nome, Adress.* FROM Client JOIN Adress ON Client.CPF = Adress.CPFCliente');
    }
    
    
    
}

export default AdressModel;