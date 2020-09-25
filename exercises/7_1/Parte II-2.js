function longestWord(frase){
    const fraseArray = frase.split(" ");
    let tamanhoPalavra=0;
    let maiorPalavra='';
        for (let index=0; index<fraseArray.length; index+=1){
            if (fraseArray[index].length>tamanhoPalavra){
                tamanhoPalavra=fraseArray[index].length;
                maiorPalavra=fraseArray[index];
            }
        }
    return maiorPalavra;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));