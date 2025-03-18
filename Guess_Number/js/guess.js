function checkNumber(){
    const num = document.getElementById('guess').value;

    if (tries > 1){
        tries--;
    }
    
    if(num == random){
        document.getElementById('message').innerHTML = "Correct";
    }
    else if(num < random){
        document.getElementById('message').innerHTML = "The number is higher";
    }
    else if(num > random){
        document.getElementById('message').innerHTML = "The number is lower";
    }
 
        triesDesplay.innerHTML = 'Tries: ${tries}';
}

