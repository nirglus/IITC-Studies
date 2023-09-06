function validateForm(){
    var isStartUppercase = firstName.value[0] == firstName.value[0].toUpperCase();
    var isBeneath20Char = lastName.value.length < 20;
    var workerBirthYear = +workerAge.value.substring(0,4);
    var currentYear = new Date().getFullYear;
    var isOver16Under65 = currentYear - workerBirthYear > 16 && currentYear - workerBirthYear < 65;
    var isEndOnComIl = workerMail.value.lastIndexOf(".com") == workerMail.value.length - 4 ||
    workerMail.value.lastIndexOf("co.il") == workerMail.value.length - 5;
    var validatePhone = workerPhone.value[0] == 0 && workerPhone.value.length == 10;
    if(isStartUppercase && isBeneath20Char && isOver16Under65 && isEndOnComIl && validatePhone){
        return true;
    }else{
        if(!isStartUppercase){
            firstName.style.border = "dotted 2px red";
            fNameLbl.innerHTML += `<p style="color:red">First name must start with an uppercase letter</p>`
        }
        if(!isBeneath20Char){
            lastName.style.border = "dotted 2px red";
            lNameLbl.innerHTML += `<p style="color:red">Last name must be under 20 characters</p>`
        
        }
        return false;
    }
}