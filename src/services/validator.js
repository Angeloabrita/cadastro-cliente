class Validator {
    static validarCPF(cpf) {
      cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
  
      // Verifica se o CPF possui 11 dígitos ou se todos os dígitos são iguais
      if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        alert('CPF inválido!');
        return false;
      }
  
      var soma = 0;
      var resto;
  
      // Calcula o primeiro dígito verificador
      for (var i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
      }
      resto = (soma * 10) % 11;
  
      if ((resto === 10) || (resto === 11)) {
        resto = 0;
      }
      if (resto !== parseInt(cpf.substring(9, 10))) {
        alert('CPF inválido!');
        return false;
      }
  
      soma = 0;
  
      // Calcula o segundo dígito verificador
      for (i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
      }
      resto = (soma * 10) % 11;
  
      if ((resto === 10) || (resto === 11)) {
        resto = 0;
      }
      if (resto !== parseInt(cpf.substring(10, 11))) {
        alert('CPF inválido!');
        return false;
      }
  
      return true; // CPF válido
    }
}

export default Validator; 