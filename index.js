// always use const and let to declare variables.

customerName = 'bob';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}
//
// overwriteBestCustomer()
// overwrites the best customer

function overwriteBestCustomer(){

  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Diana';

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'diane';
}
