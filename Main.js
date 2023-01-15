console.log("Welcome To Address Book Program")
let personObject = null;
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
let address = process.argv[7];
let phoneNumber = process.argv[8];
let email = process.argv[9];
personObject = createAddressBook(firstName, lastName, city, state, zip, phoneNumber, email, address);
if (validateContact(firstName, lastName, city, state, zip, phoneNumber, email, address)) {
    console.log("valid contact details")
} else {
    console.log("Invalid Contact Details")
}

function createAddressBook(firstName, lastName, city, state, zip, phoneNumber, email, address) {
    return new Person(firstName, lastName, city, state, zip, phoneNumber, email, address);
}
function validateContact(firstName, lastName, city, state, zip, phoneNumber, email, address) {
    return firstName.match(/^[A-Z][a-zA-Z0-9~!@#$%^&*()\-_]{2,}/) == null ? false :
        lastName.match(/^[A-Z][a-zA-Z0-9~!@#$%^&*()\-_]{2,}/) == null ? false :
            city.match(/[A-Z][a-z]{2}/) == null ? false :
                state.match(/[A-Z][a-z]{2}/) == null ? false :
                    zip.match(/[1-9][0-9]{5}/) == null ? false :
                        phoneNumber.match(/^(91 [1-9][0-9]{9})$/) == null ? false :
                            email.match(/^(([a-zA-z]{3,}(([.+-@]?[0-9_+-]{1,})|([0-9_+-]*)))(\.[a-z]{2,})?@([a-z]{2,}|[0-9]{1})\.[a-z]{2,}(\.[a-z]{2,})?)$/) == null ? false :
                                address.match(/[A-Z][a-z]{2}/) == null ? false : true;
}