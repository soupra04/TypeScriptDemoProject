function countOfVowel(str:string) {
    let vowel = "aeiouAIAEIOU"
    let count:number =0;
    for(let i=0;i<str.length;i++) {
        if(vowel.includes(str[i])){
            count++;

        }
    }
    console.log(("Total Number of COunt : " + count));
    
}
countOfVowel("soupra");