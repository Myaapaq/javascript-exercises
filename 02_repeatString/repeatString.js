

const repeatString = function(string, num) {
    let newString;
    if(num < 0){
        return "ERROR";
    }
    else if(num == 0){
        return '';
    }
    for(let i = 0; i < num; i++){
        if(i == 0){
            newString=string; 
        }
        else{
            newString+=string;
        }
    }
    return newString; 
};

// Do not edit below this line
module.exports = repeatString;
