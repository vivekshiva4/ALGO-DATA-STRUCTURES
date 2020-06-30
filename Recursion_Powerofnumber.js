// write a algorithm which will accept the base and exponent and returns result
//power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// using Math.pow(2,0)// 1

function poweerUsingLib(b,e){
    return Math.pow(b,e);
}

poweerUsingLib(2,4)

// algorith for power

function power(base,exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent-1)
}

power(2,6)