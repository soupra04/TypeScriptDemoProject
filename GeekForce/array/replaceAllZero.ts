function replaceAllZero(n : number) {

    let str =  n.toString();
    let rplc = str.replaceAll("0", "5");
    console.log(Number(rplc));



}
replaceAllZero(0);