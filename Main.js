console.log("Welcome To Address Book Program")
let personObject = null;
let firstName = process.argv[2];
let lastName = process.argv[3];
let city = process.argv[4];
let state = process.argv[5];
let zip = process.argv[6];
let address = process.argv[7];
let phoneNumber = process.argv[8];
let email = process.argv[9];
createAddressBook(firstName, lastName, city, state, zip, phoneNumber, email, address)
class Person {
    constructor(firstName, lastName, city, state, zip, phoneNumber, email, address) {
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.state = state
        this.zip = zip
        this.phoneNumber = phoneNumber
        this.email = email
        this.address = address
    }
}
function createAddressBook(firstName, lastName, city, state, zip, phoneNumber, email, address) {
    personObject = new Person(firstName, lastName, city, state, zip, phoneNumber, email, address);
}