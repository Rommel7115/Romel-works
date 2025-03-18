function checkAge() {
    const age = document.getElementById('age').value;

    
    if(age <= 12) {
        document.getElementById('message').innerHTML = "Child";
    }
    else if(age == 13 ) {
        document.getElementById('message').innerHTML = "Teen";
    }
    else if(age <= 19) {
        document.getElementById('message').innerHTML = "Teen";
    }
    else if(age == 20) {
        document.getElementById('message').innerHTML = "Adult";
    }
    else if(age <= 59) {
        document.getElementById('message').innerHTML = "Adult";
    }
    else{
        document.getElementById('message').innerHTML = "senior citizen"
    }
    console.log(age);
}
