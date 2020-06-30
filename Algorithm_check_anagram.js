//check the anagram for two string and consider only for lower case strings.

function validAnagram(stri1,stri2){
  // add whatever parameters you deem necessary - good luck!
    let str1 = stri1.toLowerCase()
    let str2 = stri2.toLowerCase()

  if(str1.length != str2.length){
      return false;
  }
  
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for(let val of str1){
      frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }
  
  for(let val of str2){
      frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }
  
  for (let key in frequencyCounter1){
      if(!(key in frequencyCounter2)){
          return false;
      }
      if(frequencyCounter1[key] != frequencyCounter2[key]){
          return false;
      }
  }
  return true;
}

validAnagram('','');
validAnagram('aaa1','aaa');
validAnagram('vivek','keivv');