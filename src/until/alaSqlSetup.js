import alasql from 'alasql';

// eslint-disable-next-line no-multi-str
alasql('CREATE LOCALSTORAGE DATABASE IF NOT EXISTS agrosysdb;\
    ATTACH LOCALSTORAGE DATABASE agrosysdb; \
    USE agrosysdb; \
    ', [], function(){

    // Select data from LOCALSTORAGE
    alasql.promise('CREATE TABLE IF NOT EXISTS Users (Nome STRING UNIQUE, Cargo STRING, Token STRING)')
    //created table client
    alasql.promise('CREATE TABLE IF NOT EXISTS Client(nome STRING, cpf STRING PRIMARY KEY UNIQUE, dataNacimento STRING, telefone STRING, celular STRING)')
    //create adress
    alasql.promise('CREATE TABLE IF NOT EXISTS Adress (id INT AUTO_INCREMENT, CEP STRING, Rua STRING, Bairro STRING, Cidade STRING, Estado STRING, Pais STRING, CPFCliente STRING, EnderecoPrincipal STRING, FOREIGN KEY (CPFCliente) REFERENCES Client(cpf))');
    //auth table

    alasql.promise('CREATE TABLE IF NOT EXISTS Authentication (Status STRING, UserNome String)');
    
  
    
});
alasql.options.errorlog = true;


export default alasql;

