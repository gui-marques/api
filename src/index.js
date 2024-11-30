const express = require('express');
const cors = require('cors'); // Importa o pacote cors
const app = express();
const port = 3000;

// Configura o CORS para permitir requisições de qualquer origem
const corsOptions = {
  origin: '*', // Permite qualquer origem
  methods: 'GET', // Permite apenas o método GET
  allowedHeaders: 'Content-Type', // Permite o cabeçalho Content-Type
};

app.use(cors(corsOptions)); // Aplica o middleware CORS com as opções

// Função para formatar a data no estilo "30 de nov de 2024 às 14:30"
const formatarDataAtual = () => {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const meses = [
    "jan", "fev", "mar", "abr", "mai", "jun",
    "jul", "ago", "set", "out", "nov", "dez"
  ];
  const mes = meses[data.getMonth()];
  const ano = data.getFullYear();
  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');
  return `${dia} de ${mes} de ${ano} às ${horas}:${minutos}`;
};

app.get('/doador', (req, res) => {
  const dadosDoador = {
    nomeDoador: "GUILHERME DE JESUS",
    tipoDocumento: "1",
    numDocumento: "133946489",
    dataEmissao: "14/10/2024",
    dataValidade: "09/10/2025",
    nuCertificado: "44123380"
  };

  const dataConsulta = formatarDataAtual();

  // Retornando um array com o objeto e a string da data e hora
  res.json([dadosDoador, dataConsulta]);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
