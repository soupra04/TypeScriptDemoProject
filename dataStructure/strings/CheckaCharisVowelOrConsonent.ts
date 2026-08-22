function CheckaCharisVowelOrConsonent (str :string) {

    for(let i=0;i<str.length;i++) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'o' || str[i] == 'i' || str[i] == 'u') {
            console.log("vowel" + " " + str[i]);
        } else {
            console.log("consonent" + " " + str[i]);
            
        }
    }
}
CheckaCharisVowelOrConsonent("hellogeeks");
