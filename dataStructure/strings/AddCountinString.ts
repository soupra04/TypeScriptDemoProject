function AddCountinString (str:string) {
    
    for(let i=0;i<str.length;i++) {
            let count = 1 ; 
            
            let visited = false;
            for(let k=0;k<i;k++) {
                if(str[i]==str[k]){
                    visited=true;
                }

            }

            if (visited ==true) continue;

        for(let j=i+1;j<=str.length-1;j++){
            if(str[i]==str[j]){
                count++;
            }

        }
        console.log(count, str[i]);
        
    }
    


}
AddCountinString("aaaabbbcccccs"); //aabbcc