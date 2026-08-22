function countWords(str:string){
    let count:number =0;
    let strarr:string[] = str.split(' ');
    for(let e of strarr){
        count++;
        
    }
console.log(count);

    

}
//countWords("Soupra Maity Hello");

function countWordInSameArray(str:string) {

    
    let count =1;

    for(let i=0;i<str.length;i++) {
        if(str[i]==' ') {
            count ++;

        }
    }
    console.log(count);
    

}
countWordInSameArray("Soupra");