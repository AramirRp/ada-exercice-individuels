let regex = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g;

function parseDate(date){
    let dateSplit=date.split('/');
    let day = parseInt(dateSplit[0]);
    let month = parseInt(dateSplit[1]);
    console.log(day);
    let year = parseInt(dateSplit[2]);

    return [day, month, year];
}

function maxDaysInMonth(date){
    date = parseDate(date);

    switch(date[1]){

        case 2:
            if ((((date[2] % 4 === 0 && year % 100 > 0) || (date[2] % 400 === 0)) && date[0]<=29)|| date[0]<=28) {
            return true;
            }else{
                return "invalid day"
            }   
        break;

        case 1 : case 3 : case 5 : case 7: case 8 : case 10: case 12:
            if(date[0]<=31 && date[0]>0){
                return true;
            }
        break;

        case 4: case 6 : case 9 : case 11:
            if(date[0]<=30 && date[0]>0){
                return true;
            }
        default : 
          return "invalid date";
    }
}

function isValidDate(date) {
    
    if(regex.test(date) == true && maxDaysInMonth(date) == true){
        return true;
    } else {
        return "invalid date";
    }


}

function isPalindrome(date){
    if(isValidDate(date) == true){
        let dateSplit = date.split("/");
        date=Number(dateSplit.join(''));
        let dateReverse = date.toString().split('').reverse().join('');
        if(date == dateReverse){
            return "palindrome"
        }else{
            return "not palindrome"
        }
    }
}



console.log(isPalindrome('22/02/2022'));