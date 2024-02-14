// let name = window.prompt("quel est votre prénom ?");
//    document.body.innerHTML += '<h2> 👋 Bonjour ' + name + '! </h2>';

function askName(){
    let name = window.prompt("quel est votre prénom ?");
    document.body.innerHTML += '<h2> 👋 Bonjour ' + name + '! </h2>';
   // if(name = parseInt()){
     //   alert(vous avez écrit un nombre;);
   // } else {
  //      document.body.innerHTML += '<h2> 👋 Bonjour ' + name + '! </h2>';
//    }
}

//let date2 = window.prompt("quelle est ton année de naissance ?");
  //  let date1 = new Date();
 //   date1= date1.getFullYear();
 //   let date3 = date1 - date2;
 //   document.body.innerHTML += '<h3> Vous avez ' + date3 + ' ans </h3>';


function askBirthYear(){

    let date2 = window.prompt("quelle est ton année de naissance ?");
    let month1 = window.prompt("quelle est ton mois de naissance ?");
    
    let date1 = new Date();
    let month2 = date1.getMonth();
    date1= date1.getFullYear();

    while(date2>date1){

        alert("Ce n'est pas possible, vous n'êtes pas né !");
        date2 = window.prompt("quelle est ta vraie année de naissance ?");
    }

    let date3 = date1 - date2;

    if((month1-1) > month2){
        date3--;
        document.body.innerHTML += '<h3> Vous avez ' + date3 + ' ans </h3>';

    }else{

        document.body.innerHTML += '<h3> Vous avez ' + date3 + ' ans </h3>';

    }
        
}

askName();
askBirthYear();


