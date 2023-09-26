// Task 1
class Person {
    constructor(firstName ,lastName, birthdate, profileImage){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.profileImage = profileImage;
    }
    getFullName(){
        return `${firstName} ${lastName}`
    }
}