function reverseString(s: string): void {

    let reverse:string[] = [];

    for(let i=s.length-1;i>=0;i--) {
        reverse.push(s[i]);

    }
    console.log(reverse.join(''));
    



}
reverseString("soupra");


    
