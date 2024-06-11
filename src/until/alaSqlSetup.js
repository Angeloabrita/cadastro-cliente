import alasql from 'alasql';

var db = new alasql.Database()

//created table user
db.exec('CREATE TABLE IF NOT EXISTS Users (Id STRING PRIMARY KEY AUTOINCREMENT, Nome STRING, Cargo STRING, Token STRING)')

//created table client
db.exec('CREATE  TABLE IF NOT EXISTS Client  (CPF STRING PRIMARY KEY, NomeCompleto STRING, DataNascimento DATE, Telefone STRING, Celular STRING)')

//create adress
db.exec('CREATE TABLE IF NOT EXISTS Adress (CEP STRING, Rua STRING, Bairro STRING, Cidade STRING, Estado STRING, Pais STRING, CPFCliente STRING, EnderecoPrincipal BOOLEAN, FOREIGN KEY (CPFCliente) REFERENCES Client(CPF))');

export default db;

