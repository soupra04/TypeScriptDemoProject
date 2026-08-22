function longestCommonPrefix(strs: string[]): string {

    let prefix :string ="";

    for(let i=0;i<strs[0].length;i++){

        let candidate = strs[0].substring(0,i+1);

        for(let j=0;j<strs.length;j++){
            if(!(strs[i].startsWith(candidate))){
                return prefix;


            }
        }
        prefix = candidate;

    }

return prefix;

    
};

console.log(longestCommonPrefix(["flower","flow","flight"]));






//["flower","flow","flight"]
