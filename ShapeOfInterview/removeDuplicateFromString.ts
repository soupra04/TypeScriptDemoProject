function removeDuplicate(str:string) {

    let s = str.split('');

    let j=0;
    for(let i=0;i<s.length-1;i++) {
        if(s[i] !==s[j]) {
            j++;
            s[j] =s[i];

        }
    }
    let sb = s.slice(0,j+1);
    let sbtext = sb.join('');
    console.log(sbtext);
      

}
removeDuplicate("hellooh");