function findTheduplciateCharacterInStr(str:string) { //automation

    for(let i=0;i<str.length;i++){
        let count = 1;
        for(let j=i+1;j<=str.length-1;j++){
            if(str[i]==str[j]){
                console.log("duplicate element found" + " "+str[i]);
                
            }
        }

    }


}
findTheduplciateCharacterInStr("eeee");