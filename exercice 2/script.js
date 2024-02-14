let appelNombre = function(){
let givenNumber = prompt("entre un nombre ! ");
document.body.innerHTML += '<h2> le nombre est ' + givenNumber + '! </h2>';
givenNumber = parseInt(givenNumber);
console.log(givenNumber);
return givenNumber;
}

let didIwin = function(){
    let givenNumber;
   givenNumber = appelNombre();
    console.log(givenNumber);
    if(givenNumber>22){
        alert("le nombre est plus grand");
        return false
    }   
    else if (givenNumber<22){   
        alert("le nombre est plus petit");
        return false;
    }else{
        alert("bravo! vous avez deviné");
        return true;
    }
}

let gameplay = function(){
    didIwin();
}


gameplay();