

const reverseString = function(str) { // take string as input
    let rString;    // rString for storing reversed string
    let i = str.length;      // counter equals 
    rString = str.substring(1,1)
    while (i >= 0){
        rString +=str.substring(i,i+1);    // add last letter of string to new string
        i--;
    }   // repeat until the end of the string 
   
    return rString; 
};

// Do not edit below this line
module.exports = reverseString;
