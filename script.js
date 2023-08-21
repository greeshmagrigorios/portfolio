function validateFirstName(){
    let fname = document.getElementById('firstname').value;
    let reg = /^[a-z A-Z \s]+$/ 

    if(reg.test(fname)){
        document.getElementById('message1').innerHTML = 'Verified';
        document.getElementById('message1').style.color ='green';
        return true
    }
    else{
        document.getElementById('message1').innerHTML = 'Failed';
        document.getElementById('message1').style.color ='red';
        return false
    }

}


function validateLastName(){
    let lname = document.getElementById('lastname').value;
    let reg = /^[a-z A-Z \s]+$/ 

    if(reg.test(lname)){
        document.getElementById('message2').innerHTML = 'Verified';
        document.getElementById('message2').style.color ='green';
        return true
    }
    else{
        document.getElementById('message2').innerHTML = 'Failed';
        document.getElementById('message2').style.color ='red';
        return false
    }

}
    


const validateNumber = ()=> {
    let mnum = document.getElementById('number').value;
    let reg = /^[0-9]{10}$/

    if(reg.test(mnum)){
        document.getElementById('message3').innerHTML = 'Verified';
        document.getElementById('message3').style.color ='green';
        return true
    }
    else{
        document.getElementById('message3').innerHTML = 'Failed';
        document.getElementById('message3').style.color ='red';
        return false
    }

}


function validateEmail(){
    let uremail = document.getElementById("email").value;
    let reg = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-_]{2,20})\.([a-z]{2,6})$/


    if(reg.test(uremail)){
        document.getElementById('message4').innerHTML = 'Verified';
        document.getElementById('message4').style.color ='green';
        return true
    }
    else{
        document.getElementById('message4').innerHTML = 'Failed';
        document.getElementById('message4').style.color ='red';
        return false
    }
}


function validateAddress(){
    let addr = document.getElementById('address').value;
    let reg = /^[a-z A-Z 0-9 \s \. \, \- \:]+$/ 

    if(reg.test(addr)){
        document.getElementById('message5').innerHTML = 'Verified';
        document.getElementById('message5').style.color ='green';
        return true
    }
    else{
        document.getElementById('message5').innerHTML = 'Failed';
        document.getElementById('message5').style.color ='red';
        return false
    }

}


function validateAllFields(){
    validateFirstName();
    validateLastName();
    validateNumber();
    validateAddress();
if( validateFirstName() && validateLastName() && validateNumber() && validateEmail() && validateAddress())
{
    return true
}
else{
    return false
}
}

