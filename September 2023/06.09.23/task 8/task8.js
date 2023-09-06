function validateForm(){
    var isStartUppercase = firstName.value[0] == firstName.value[0].toUpperCase();
    var isBeneath20Char = lastName.value.length < 20;
    var workerBirthYear = +workerAge.value.substr(0,4);
    var currentYear = new Date().getFullYear();
    console.log(currentYear);
    var isOver16Under65 = currentYear - workerBirthYear > 16 && currentYear - workerBirthYear < 65;
    var isEndOnComIl = workerMail.value.lastIndexOf(".com") == workerMail.value.length - 4 ||
    workerMail.value.lastIndexOf("co.il") == workerMail.value.length - 5;
    var validatePhone = workerPhone.value[0] == 0 && workerPhone.value.length == 10;
    if(isStartUppercase && isBeneath20Char && isOver16Under65 && isEndOnComIl && validatePhone){
        return true;
    }else{
        if(!isStartUppercase){
            firstName.style.border = "dotted 2px red";
            fNameLbl.innerHTML += `<p style="color:red">*First name must start with an uppercase letter</p>`
        }
        if(!isBeneath20Char){
            lastName.style.border = "dotted 2px red";
            lNameLbl.innerHTML += `<p style="color:red">*Last name must be under 20 characters</p>`
        }
        if(!isOver16Under65){
            workerAge.style.border = "dotted 2px red";
            ageLbl.innerHTML += `<p style="color:red">*Age must be between 16 and 65</p>`
        }
        if(!isEndOnComIl){
            workerMail.style.border = "dotted 2px red";
            mailLbl.innerHTML += `<p style="color:red">*Email must end with ".com" or "co.il"</p>`
        }
        if(!validatePhone){
            workerPhone.style.border = "dotted 2px red";
            phoneLbl.innerHTML += `<p style="color:red">*Phone number must start with 0 and be less than 10 digits</p>`
        }
        return false;
    }
}