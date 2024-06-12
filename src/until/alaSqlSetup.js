import alasql from 'alasql';
alasql('CREATE INDEXEDDB DATABASE IF NOT EXISTS agrosysdb;\
    ATTACH INDEXEDDB DATABASE agrosysdb; \
    USE agrosysdb; \
    ', [], function(){

    // Select data from IndexedDB
    alasql.promise('CREATE TABLE IF NOT EXISTS Users (Id STRING  AUTOINCREMENT, Nome STRING PRIMARY KEY, Cargo STRING, Token STRING)')
    //created table client
    alasql.promise('CREATE TABLE IF NOT EXISTS Client(id INT AUTO_INCREMENT, nome STRING, cpf STRING PRIMARY KEY, dataNacimento STRING, telefone STRING, celular STRING)')
    //create adress
    alasql.promise('CREATE TABLE IF NOT EXISTS Adress (id INT AUTO_INCREMENT, CEP STRING, Rua STRING, Bairro STRING, Cidade STRING, Estado STRING, Pais STRING, CPFCliente STRING, EnderecoPrincipal BOOLEAN, FOREIGN KEY (CPFCliente) REFERENCES Client(CPF))');
    //auth table

    alasql.promise('CREATE TABLE IF NOT EXISTS Authentication (Status STRING, UserNome String)');
    
  
    
});
alasql.options.errorlog = true;


export default alasql;

