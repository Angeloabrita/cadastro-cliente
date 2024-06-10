import AlaSQL from 'alasql';

//created table user
AlaSQL('CREATE TABLE Users  (Id STRING PRIMARY KEY, Nome STRING, Cargo STRING, token STRING)');

//created table client
AlaSQL('CREATE TABLE Client  (CPF STRING PRIMARY KEY, NomeCompleto STRING, DataNascimento DATE, Telefone STRING, Celular STRING)');

//create adress
AlaSQL('CREATE TABLE Adress (CEP STRING, Rua STRING, Bairro STRING, Cidade STRING, Estado STRING, Pais STRING, CPFCliente STRING, EnderecoPrincipal BOOLEAN, FOREIGN KEY (CPFCliente) REFERENCES Client(CPF))');
export default AlaSQL;
