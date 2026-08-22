const Browser = {
    chrome: 5,
    firefox: 1,
    edge: 2,
    webkit: 3
} as const;

console.log(Browser.chrome); // 0


function getBrowserName (browser:string) : number {

    if(browser=="chrome"){
        return 125;
    }

    return -1;

}