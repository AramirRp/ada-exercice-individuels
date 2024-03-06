let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


function sum1(X){
    let sum = 0;
    for(let i=0;i<X.length; i++){
        sum +=X[i];
    }
   console.log(sum);
}

sum1(tab);

function sum2(X){

    if (X.length == 1){
        return X[0];
    } 
    return X[0] + sum2(X.slice(1));
};

console.log(sum2(tab));

function factorial(X){
    if(X === 1){
        return 1;
    }
    return X*factorial(X-1);
}

console.log(factorial(3));

function fibonacci(X){
    if(X < 2) {
        return X;
    }
    return fibonacci(X-1) + fibonacci(X-2);
};

console.log(fibonacci(7));