//enum hold the set of constants
//numeric
//string
//heterogeneous

//numeric

enum Broser {
    Chrome1,
    Firefox1,
    Safari1,
    Edge1
}
console.log(Broser.Chrome1);
console.log(Broser);


enum Browser {


    Firefox2,
    Edge2,
    Chrome2 = getVersion('Chrome2'),
}
function getVersion(Browsername: string): number {
    if (Browsername == "Chrome2") {
        return 115;
    }
    return -1;
}
console.log(Browser.Chrome2);

//String Enum

enum envuronment {

    Dev = "dev",
    QA = "qa",
    STAGE = "stage"
}

console.log(envuronment.Dev);

//