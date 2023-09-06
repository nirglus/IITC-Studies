function validateForm(){
    var isStartUppercase = firstName.value[0] == firstName.value[0].toUpperCase();
    var isBeneath20Char = lastName.value.length < 20;
    var workerBirthYear = +workerAge.substring(0,4);
    var currentYear = new Date().getFullYear;
    var isOver16Under65 = currentYear - workerBirthYear > 16 && currentYear - workerBirthYear < 65;
    var isEndOnComIl = workerMail.value.lastIndexOf(".com") == workerMail.value.length - 4 ||
    workerMail.value.lastIndexOf("co.il") == workerMail.value.length - 5;
    var validatePhone = workersPhone.value[0] == 0 && workersPhone.value.length == 10;
    

}