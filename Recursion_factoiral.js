// write a algorith for factorial
//eg: 3! = 3*2*1, 0! = 1

function factorial(num){
    if(num === 0) return 1;
    return num * factorial(num-1);
}

factorial(10);