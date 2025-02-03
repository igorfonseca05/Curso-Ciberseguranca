# Curso cibersegurança -Notas

## O que é criptografia? 🔐

A criptografia é o processo de conversão de informações ou dados em um código, especialmente para impedir o acesso não autorizado. Ao transformar informações legíveis, conhecidas como **texto simples**, em um formato ilegível, conhecido como **texto cifrado**, a criptografia protege informações confidenciais de olhares curiosos.

## Por que a criptografia é essencial para a segurança ?

A criptografia é vital porque protege os dados contra acesso não autorizado, garantindo a confidencialidade e a privacidade.

## Algoritmos de criptografia simétrica 🔎

A **criptografia simétrica** depende de uma única chave para criptografar e descriptografar dados, o que a torna rápida e eficiente. É comumente usada para criptografar grandes quantidades de dados em cenários em que existe um canal seguro para compartilhar a chave secreta. Os algoritmos de criptografia simétrica são ideais para aplicativos que exigem criptografia de dados em alta velocidade e são frequentemente usados em armazenamento de arquivos, criptografia de banco de dados e transações on-line seguras.

- **Advanced Encryption Standard (AES)**: Atualmente sse algoritmo é amplamente utilizado por sua segurança e eficiencia. Suporta chaves de **128, 192, 256 bits**, o que o torna altamente adaptável a diferentes niveis de segurança, que vão desde áreas como finanças e setores governamentais.

* **Blowfish**: É um algoritmo de criptografia simétrica conhecido por sua simplicidade e eficiência. Ele usa um tamanho de bloco de 64 bits e seu comprimento de chave flexível (variando de 32 a 448 bits) o torna adaptável a diferentes necessidades de criptografia. O desempenho rápido do Blowfish o torna adequado para aplicativos como criptografia de arquivos e aplicativos de software que precisam de criptografia rápida de dados.

* **Twofish**: É um sucessor avançado do Blowfish, tendo sido desenvolvido para oferecer tamanho de bloco de **128 bits** além de flexibilidade e segurança. Apesar de sua eficiencia, o **AES** ainda é mais comumente utilizado.

⚠️ Vejo no arquivo simet.js como criar usar algoritmos de criptografia simétrico para codificar textos simples.
