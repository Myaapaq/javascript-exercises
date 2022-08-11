const sumAll = function(int1, int2) {   // Function takes two integers as parameters
    let sumOfAll = 0;   // var to hold the sum 
    if (int1 < 0 || int2 < 0){
        return "ERROR";
    }
    else if (typeof int1 != "number" || typeof int2 != "number"){
        return "ERROR";
    }
    else if (int1 > int2) { // 8 and 4
        let placehold = int2; // placehold = 4, int1 = 8, int2 =4;
        /*8*/ int2 = int1; //  /*8*/
        /*4*/ int1 = placehold; // placehold = 4; 
    }
  
    // loop starting at int 1, adding a number that is one more than the last iteration until it gets to int 2
    for(let i = int1; i <= int2; i++){
        sumOfAll = i + sumOfAll; 
    } 
    return sumOfAll; // returns the sum 
};

// Do not edit below this line
module.exports = sumAll;
