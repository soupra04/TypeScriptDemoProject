let userId: (string | number);
userId = 1000;
userId = "Soupra";

function getuserInfo(customerID :(string | number)) {
    if(typeof(customerID)=='number'){
        return 1001;
    } else if(typeof(customerID)=='string'){
        return 'soupra'
    }
}
console.log(getuserInfo(901));