function reverseString(str: string): string { //o(n) o(n)
    let str1: string[]= [];

    for(let i=str.length-1;i>=0;i--) {

        str1[str.length-1-i] = str[i];

    }
    let newStrArray = str1.join("");


return newStrArray;
}
//console.log(reverseString("soupra"));



//reverseStringinSameArray("Soupra Maity"); 

function reverseStringinSameArray(str:string) {

    let s = str.split('');
    let left = 0;
    let right = s.length-1;

    while(left < right ) {
        [s[left],s[right]] = [s[right],s[left]];
        left++;
        right--;
    }
console.log(s.join(''));



}
reverseStringinSameArray("Soupra Maity");

