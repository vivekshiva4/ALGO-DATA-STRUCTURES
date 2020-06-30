// write a function called same and pass two array and check whether the first array is square of second array.
//output send true or false.

function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }else{
        for(let array of arr1){
            let correctindex = arr2.indexOf(array ** 2);
            console.log("Corect Index : ", correctindex)
            if(correctindex === -1){
                return false;
            }else{
                console.log("array2 before splice with correct index of array element:",arr2);
                arr2.splice(correctindex,1);
                console.log("array2 after:",arr2);

            }
        }
        return true;
    }
}
same([1,2,3],[1,9,4]);
same([1,2,3],[1,0,9]);

//Refactored solution 

function sameRefactored(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyConverter1 = {};
    let frequencyConverter2 = {};
    for(let val of arr1){
        frequencyConverter1[val] = ++frequencyConverter1[val] || 1;
    }
    for(let val of arr2){
        frequencyConverter2[val] = ++frequencyConverter2[val] || 1;
    }

    console.log(frequencyConverter1);
    console.log(frequencyConverter2);

    for(let key in frequencyConverter1){
        if(!(key ** 2 in frequencyConverter2)){
            return false;
        }
        if((frequencyConverter2[key ** 2] !== frequencyConverter1[key])){
            return false;
        }
    }
    return true;
}
sameRefactored([1,2,3,3],[1,9,4,9]);
