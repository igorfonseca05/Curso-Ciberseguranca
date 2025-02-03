
/**Leitura de artigo para praticar sobre criptografia. */

// Artigo: Tipos de algoritmos de criptografia explicados para iniciantes
// Autor: Dionisie Gitlan

// Aqui adicionerei todo o processo de criação de texto cifrando usando
// algoritmos simétricos dentro do NodeJS

const crypto = require('crypto')

function getSimetrickey() {

    const key = crypto.randomBytes(32) // O método .randomBytes() retorna um dado binário(Buffer)

    // toString() converte para o formato da chave especificado

    const hexKey = key.toString('hex'); // PREFIRA
    const base64Key = key.toString('base64'); // PREFIRA
    const base64urlKey = key.toString('base64url'); // se for enviar via url

    console.log('Hex:', hexKey);
    console.log('Base64:', base64Key);
    console.log('Base64URL:', base64urlKey);
}

getSimetrickey()