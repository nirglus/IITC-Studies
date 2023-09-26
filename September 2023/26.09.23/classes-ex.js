// Task 1
function Person(firstName ,lastName, birthdate, profileImage) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.profileImage = profileImage;
    this.getFullName = function getFullName(){
        return `${firstName} ${lastName}`
    }
    this.getAge = function getAge(){
        const currentDate = new Date();
        const birthDate = new Date(birthdate);
        const differenceInMillisec = currentDate - birthDate;
        const ageDate = new Date(differenceInMillisec);
        const age = ageDate.getFullYear() - 1970;
        return age;
    }
    this.canClub = function canClub(){
        if(this.getAge() >= 18){
            return true;
        }
        return false
    }
    this.render = function render(){
        return `<div class="personDiv">
        <h1>${this.getFullName()}</h1>
        <p><b>Age:</b> ${this.getAge()}</p>
        <p><b>Can club?:</b> ${this.canClub()}</p>
        <img src="${this.profileImagemage}">`;
    }
}
const PERSON_ARR = [
    new Person("James", "Jameson", "1948-12-01", "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600"),
    new Person("Efim", "Fisher", "1974-11-23", "https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=600"),
    new Person("Meir", "David", "2000-01-20", "https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=600"),
    new Person("Yossi", "Yusov", "2012-03-03", "https://images.pexels.com/photos/969373/pexels-photo-969373.jpeg?auto=compress&cs=tinysrgb&w=600"),
    new Person("Dani", "Diesel", "2015-04-14", "https://images.pexels.com/photos/1416741/pexels-photo-1416741.jpeg?auto=compress&cs=tinysrgb&w=600")
]
PERSON_ARR.forEach((person) => {
    document.getElementById("person").innerHTML += person.render();
})
