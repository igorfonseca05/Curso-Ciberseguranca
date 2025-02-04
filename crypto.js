
/**Leitura de artigo para praticar sobre criptografia. */

// Artigo: Tipos de algoritmos de criptografia explicados para iniciantes
// Autor: Dionisie Gitlan


// Aqui adicionerei todo o processo de criação de texto cifrando usando
// algoritmos simétricos dentro do NodeJS

const crypto = require('crypto')

function getSimetrickey() {

    const key1 = crypto.randomBytes(16) // O método .randomBytes() retorna um dado binário(Buffer)
    const key2 = crypto.randomBytes(24)
    const key3 = crypto.randomBytes(32)


    // toString() converte para o formato da chave especificado
    const hexKey = key3.toString('hex'); // PREFIRA
    const base64Key = key3.toString('base64'); // PREFIRA
    const base64urlKey = key3.toString('base64url'); // se for enviar via url

    // console.log('Hex:', hexKey);
    // console.log('Base64:', base64Key);
    // console.log('Base64URL:', base64urlKey);
}

// getSimetrickey()


// Gera chave simetrica de 32 bytes
// Gera chave simetrica de 16 bytes(vetor de inicialização)


function simetric(text) {
    const key = crypto.randomBytes(32)
    const iv = crypto.randomBytes(16)

    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)
    let encrypted = cipher.update(text, 'utf-8', 'hex')

    encrypted += cipher.final('hex')

    decrypt({ iv: iv.toString('hex'), encrypted, key: key.toString('hex') })
}



function decrypt(dataObject) {
    try {

        const deCipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(dataObject.key, 'hex'), Buffer.from(dataObject.iv, 'hex'))

        let decryptText = deCipher.update(dataObject.encrypted, 'hex', 'utf8')

        decryptText += deCipher.final('utf8')

        console.log(decryptText)

    } catch (error) {
        console.log(error)
    }

}

simetric('Bom dia')


// // Criando hash

// function gethash(senha) {
//     const hash = crypto.createHash("SHA-256").update(senha).digest().toString('hex')

//     // console.log(hash)
//     return hash
// }

// const senha1 = gethash('igorfonseca')
// const senha2 = gethash('igorfonseca2')

// console.log(senha1 === senha2)