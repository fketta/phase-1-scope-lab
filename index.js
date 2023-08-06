var customerName= "bob"

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
   return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer ='maybe bob'
    return bestCustomer;
}

const leastFavoriteCustomer = "karen"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "cindy"
    return leastFavoriteCustomer;
}