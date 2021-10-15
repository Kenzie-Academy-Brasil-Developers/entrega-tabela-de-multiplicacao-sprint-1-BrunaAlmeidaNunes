function tabelaDeMultiplicacao(numero) {
    let resultado = [];
   
    for (let linhas = 0; linhas <= numero; linhas++) {
      resultado.push([]);
  
      for (let coluna = 0; coluna <= numero; coluna++) {
        resultado[linhas].push(coluna * linhas);
      }
    }
    return resultado;
  }
  
  console.table(tabelaDeMultiplicacao(10));