console.log("Welcome To Address Book Program")
let personObject = null;
let addressBookArray = [];
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
let firstName = process.argv[2];
let lastName = process.argv[3];
let city = process.argv[4];
let state = process.argv[5];
let zip = process.argv[6];
let phoneNumber = process.argv[7];
let email = process.argv[8];
let address = process.argv[9];
personObject = createAddressBook(firstName, lastName, city, state, zip, phoneNumber, email, address);
if (validateContact(firstName, lastName, city, state, zip, phoneNumber, email, address)) {
    console.log("valid contact details");
    addressBookArray.push(personObject);
} else {
    console.log("Invalid Contact Details")
}
editContact("Mazhar", "Ali", "Hyderabad", state, zip, phoneNumber, email, address)
deleteContact("Mazhar", "Ali")
function createAddressBook(firstName, lastName, city, state, zip, phoneNumber, email, address) {
    return new Person(firstName, lastName, city, state, zip, phoneNumber, email, address);
}
function validateContact(firstName, lastName, city, state, zip, phoneNumber, email, address) {
    return firstName.match(/^[A-Z][a-zA-Z0-9~!@#$%^&*()\-_]{2,}/) == null ? false :
        lastName.match(/^[A-Z][a-zA-Z0-9~!@#$%^&*()\-_]{2,}/) == null ? false :
            city.match(/[A-Z][a-z]{2}/) == null ? false :
                state.match(/[A-Z][a-z]{2}/) == null ? false :
                    zip.match(/[1-9][0-9]{5}/) == null ? false :
                        phoneNumber.match(/[1-9][0-9]{9}/) == null ? false :
                            email.match(/^(([a-zA-z]{3,}(([.+-@]?[0-9_+-]{1,})|([0-9_+-]*)))(\.[a-z]{2,})?@([a-z]{2,}|[0-9]{1})\.[a-z]{2,}(\.[a-z]{2,})?)$/) == null ? false :
                                address.match(/[A-Z][a-z]{2}/) == null ? false : true;
}
function editContact(firstName, lastName, city, state, zip, phoneNumber, email, address) {
    let contact = addressBookArray.filter(e => e.firstName === firstName && e.lastName === lastName)
    if (contact.length == 0) {
        console.log("Contact Doesn't Exists")
    } else {
        contact.city = city
        contact.state = state
        contact.zip = zip
        contact.phoneNumber = phoneNumber
        contact.email = email
        contact.address = address
    }
}
function deleteContact(firstName,lastName){
    let contact=addressBookArray.filter(e => e.firstName != firstName && e.lastName != lastName);
    addressBookArray=contact;
}