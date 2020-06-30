// write an algorithm for searching smaller strings in a sentences.

function stringSearch(longStr, shortStr){
        var count = {};
        for(var i = 0; i < longStr.length; i++){
            for(var j = 0; j < shortStr.length; j++){
                if(shortStr[j] !== longStr[i+j]) break;
                if(j === shortStr.length -1) count[shortStr] = ++count[shortStr] || 1
            }
        }
        return count;
} 

//stringSearch("My name is vivek and he is vivek","vivek");

function stringSearchInArray(arrLong,keywordsArray){
//    if(arrLong.length === 0 || keywordsArray.length === 0) return null; 
    var count = [];
    for(var i = 0; i < arrLong.length; i++){
      for(var j = 0; j < keywordsArray.length; j++){
         for(var k = 0; k < arrLong[i].length; k++){
            for(var l = 0; l < keywordsArray[j].length; l++){
                if(keywordsArray[j][l] !== arrLong[i][k+l]) break;
                if(l === keywordsArray[j].length -1) count[keywordsArray[j]] = ++count[keywordsArray[j]] || 1
             }
          }  
        }
     }

    return count;
}

stringSearchInArray(["My name is vivek and he is vivek vivek","testing the code cod code code code code"],["vivek","code","isghfjhgh"]);
       