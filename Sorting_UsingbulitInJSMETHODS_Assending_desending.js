// write a algorithm that will sort numbers and string length assending and desending

var arr = [2,1,3,9,3,4,56,7,8]

//assending
function assendingArray(num1, num2){
    return num1 - num2;
}

arr.sort(assendingArray);

//desending

function desendingArray(num1, num2){
    return num2 - num1;
}

arr.sort(desendingArray);

//assending string length
var strArr = ["vivek","kittu","akit","advaith"]
function assendingString(str1, str2){
    return str1.length - str2.length;
}

strArr.sort(assendingString);

//desending string length
function desendingString(str1, str2){
    return str2.length - str1.length;
}

strArr.sort(desendingString);