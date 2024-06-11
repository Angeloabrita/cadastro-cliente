import alasql from "alasql";

class AdressModel{

    static create(adress){
        alasql('INSERT INTO adress (CEP, Rua, Bairro, Cidade, Estado, Pais, CPFUser, EnderecoPrincipal) VALUE (?, ?, ?, ?, ?, ?, ?, ?)', [adress.cep, adress.rua, adress.bairro, adress.cidade, adress.estado, adress.pais, adress.cpfUser, adress.endPrincipal]);
    }

    static read(adress){
        return alasql('SELECT * FROM adress WHERE CPFUser = ?', [adress.cpfUser]);
    }

    static showAll(){
        return alasql('SELECT Client.NomeCompleto, Adress.* FROM Client JOIN Adress ON Client.CPF = Adress.CPFCliente');
    }
    
    
    
}

export default AdressModel;