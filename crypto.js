
/**Leitura de artigo para praticar sobre criptografia. */

// Artigo: Tipos de algoritmos de criptografia explicados para iniciantes
// Autor: Dionisie Gitlan

// Aqui adicionerei todo o processo de criação de texto cifrando usando
// algoritmos simétricos dentro do NodeJS

const crypto = require('crypto')

function getSimetrickey() {

    const key1 = crypto.randomBytes(16) // O método .randomBytes() retorna um dado binário(Buffer)
    const key2 = crypto.randomBytes(24) // O método .randomBytes() retorna um dado binário(Buffer)
    const key3 = crypto.randomBytes(32) // O método .randomBytes() retorna um dado binário(Buffer)

    console.log(key1.toString('hex'))
    console.log(key2.toString('hex'))
    console.log(key3.toString('hex'))

    // toString() converte para o formato da chave especificado

    // const hexKey = key.toString('hex'); // PREFIRA
    // const base64Key = key.toString('base64'); // PREFIRA
    // const base64urlKey = key.toString('base64url'); // se for enviar via url

    // console.log('Hex:', hexKey);
    // console.log('Base64:', base64Key);
    // console.log('Base64URL:', base64urlKey);
}

getSimetrickey()




// // Criando hash

// function gethash(senha) {
//     const hash = crypto.createHash("SHA-256").update(senha).digest().toString('hex')

//     // console.log(hash)
//     return hash
// }

// const senha1 = gethash('igorfonseca')
// const senha2 = gethash('igorfonseca2')

// console.log(senha1 === senha2)