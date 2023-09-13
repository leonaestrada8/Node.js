const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');

function backupFile(inputFilePath, outputFilePath, encryptionKey) {
  // Ler o arquivo de entrada
  fs.readFile(inputFilePath, (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return;
    }

    // Comprimir os dados
    zlib.gzip(data, (err, compressedData) => {
      if (err) {
        console.error('Erro ao comprimir os dados:', err);
        return;
      }

      // Gere um IV (Vetor de Inicialização) seguro e aleatório
      const iv = crypto.randomBytes(16);

      // Converta a chave de criptografia em um buffer
      const key = crypto.scryptSync(encryptionKey, 'salt', 32);

      // Criar o cifrador com o algoritmo, a chave e o IV
      const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
      
      // Criptografar os dados comprimidos
      let encryptedData = cipher.update(compressedData);
      encryptedData = Buffer.concat([iv, encryptedData, cipher.final()]);

      // Escrever os dados criptografados em um arquivo de backup
      fs.writeFile(outputFilePath, encryptedData, (err) => {
        if (err) {
          console.error('Erro ao escrever o arquivo de backup:', err);
        } else {
          console.log('Backup realizado com sucesso!');
        }
      });
    });
  });
}

// Exemplo de uso
const inputFilePath = 'data.txt'; // Caminho do arquivo original
const outputFilePath = 'backup.gz.enc'; // Caminho do arquivo de backup
const encryptionKey = 'chave-secreta'; // Chave de criptografia
backupFile(inputFilePath, outputFilePath, encryptionKey);
