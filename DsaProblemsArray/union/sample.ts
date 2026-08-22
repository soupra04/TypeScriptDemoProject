let userId1: (string | number);
userId1=1001;
userId1 = "Soupra";

function getUserinfo(customerID:any) {
    if(typeof(customerID)=='number'){
        return "this is numnber"
    } else if (typeof(customerID)== 'string'){
        return "this is string";

    }


}
console.log(getUserinfo(900));