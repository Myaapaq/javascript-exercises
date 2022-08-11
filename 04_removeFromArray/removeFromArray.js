// This is the function definition, it takes an array, and an item(s) to remove
const removeFromArray = function(array, remItem,a) { 
    
    let index; // This var holds the location of the element to be deleted from the array
    // For each item, excluding the array parameter at index 0, loop through the following code
    for(let i = 1; i < arguments.length; i++ ){
        // use array.indexOf()to find where the element is, store value in index variable
        index = array.indexOf(arguments[i]);
            // if the index is not -1 then
            if(index != -1){
                // pass that index into array.splice(element,1) to remove desired element 
                array.splice(index,1); 
            }
    } // if we havent looped through all args of the function yet, repeat with next param
     // return the array without removed items 
     return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
