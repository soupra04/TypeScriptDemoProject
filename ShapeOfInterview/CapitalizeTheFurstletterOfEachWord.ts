function capitalizeFirstLetterOfEachWord(input: string) {

   const neword : string[]= input.split(" ");
    //console.log(neword);

    let result : string [] = [];
   
    for(let i=0;i<neword.length;i++){
        //console.log(neword[i]);
        const firstLetter = neword[i][0].toLocaleUpperCase();
        const remaining = neword[i].slice(1);
        const capitalizedWord = firstLetter + remaining;
        result.push(capitalizedWord);


        
    }
    return result.join(" ");

}
console.log(capitalizeFirstLetterOfEachWord("soupra maity"));