# Ciphering-CLI-Tool

Cipher CLI tool can encode and decode text by 3 substitution ciphers:

- [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
- [Atbash cipher](https://en.wikipedia.org/wiki/Atbash)
- [ROT-8 as variation of ROT-13](https://en.wikipedia.org/wiki/ROT13)

The app transform only latin letters, other characters and spaces remains the same.

## How to install

```bash
$ npm install
```



## How to use

In the app folder write the command `node index.js [options]`, where the `options` are:

- `-c, --config`: ciphering scheme (required, string)
- `-i, --input`: input file or a stream `stdin`
- `-o, --output`: output file or a stream `stdout`

### Usage examples:

```bash
$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt  
> `This is secret. Message about "_" symbol!`  
> output.txt  
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt  
> `This is secret. Message about "_" symbol!`  
> output.txt  
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node my_ciphering_cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt  
> `This is secret. Message about "_" symbol!`  
> output.txt  
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt  
> `This is secret. Message about "_" symbol!`  
> output.txt  
> `This is secret. Message about "_" symbol!`
