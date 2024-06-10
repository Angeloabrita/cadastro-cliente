import AlaSQL from "../until/alasqlsetup";


class AdressModel{

    static create(adress){
         AlaSQL('INSERT INTO adress (CEP, Rua, Bairro, Cidade, Estado, Pais, CPFUser, EnderecoPrincipal) VALUE (?, ?, ?, ?, ?, ?, ?, ?)', [adress.cep, adress.rua, adress.bairro, adress.cidade, adress.estado, adress.pais, adress.cpfUser, adress.endPrincipal]);
    }

    static read(adress){
        return AlaSQL('SELECT * FROM adress WHERE CPFUser = ?', [adress.cpfUser]);
    }

    static showAll(){
        return AlaSQL('SELECT Client.NomeCompleto, Adress.* FROM Client JOIN Adress ON Client.CPF = Adress.CPFCliente');
    }
    
    
    
}

export default AdressModel;