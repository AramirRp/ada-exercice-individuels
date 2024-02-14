let joueur1 = function(){
    let givenNumber = prompt("entre un nombre entre 0 et 50 ! ");
    givenNumber = parseInt(givenNumber);
    console.log(givenNumber);
    while(givenNumber>50 || givenNumber<0){
        alert("respectez mon autorité");
        givenNumber = prompt("entre un nombre entre 0 et 50 ! ");
        givenNumber = parseInt(givenNumber);
    }
    return givenNumber;
    }

let joueur2 = function(){
let guessNumber = prompt("entre un nombre ! ");
guessNumber = parseInt(guessNumber);
return guessNumber;
}


let didIwin = function(){
    let guessNumber = joueur2();
    if(guessNumber>givenNumber){
        alert("le nombre est plus grand");
        return false
    }   
    else if (guessNumber<givenNumber){   
        alert("le nombre est plus petit");
        return false;
    }else{
        alert("bravo! vous avez deviné");
        return true;
    }
}

let gameplay = function(){
   let ret = didIwin();
   while(ret == false){

    ret = didIwin();
   }
    return true;
   
}

let givenNumber = joueur1();
gameplay();