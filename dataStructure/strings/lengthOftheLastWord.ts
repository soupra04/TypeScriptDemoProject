function lengthOftheLastWord(str:string) : number{ //welcome to typescript

    let fn = str.trim().split(" "); //convert into string array
    console.log(fn);
    
    let len = fn[fn.length-1].length;
    //console.log(len);
    return len;
}
console.log(lengthOftheLastWord("welcome to typescript  "));
