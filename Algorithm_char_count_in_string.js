// write a function which will take a input string and returns countof each character in the string.

function countCharInString(str){
   var result = {};
    for(let i = 0; i < str.length; i++){
      if(result[str[i]] > 0){
          result[str[i]]++;
      }else{
          result[str[i]] = 1;
      }  
    }
   return result;
}

countCharInString("HelloWorld");
countCharInString("");
countCharInString("Hey hi 123!@");

// here we want to retuen the result in alpha numeric only and lower case only.

function countCharInStringAlphaNumeric(str){
    var result ={};
    var strToLower = str.toLowerCase()
     
     for (char of strToLower){
       if(/[a-z0-9]/.test(char)){
        if(result[char] > 0){
            result[char]++;
         }else{
            result[char] = 1;
         }            
       }     
     }
    return result;
}
countCharInStringAlphaNumeric("HelloWorld teeSTINHi!! -23");


//Optimised Solution is cahnging this solution because regular expression take lot of performance issue.
//charCodeAt() function has values 47-58 numbers, 64-91 Capitals A-Z, 96-123 small a-z
function isAlphaNumeric(char){
   var code = char.charCodeAt(0);

   if(!(code > 47 && code <58 ) && !(code > 64 && code <91) && !(code > 96 && code <123)) {
       return false;
   }
   return true;
}

function countCharInStringAlphaNumeric(str){
    var result ={};
    var strToLower = str.toLowerCase()
     
     for (char of strToLower){
       
       if(isAlphaNumeric(char)){
        //replaced with
//         if(result[char] > 0){
//             result[char]++;
//          }else{
//             result[char] = 1;   
//          }

        result[char] = ++result[char] || 1         
       }     
     }
    return result;
}

//countCharInStringAlphaNumeric("HelloWorld teeSTI")                                                                      NHi!!23");


