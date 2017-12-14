/*
created 2 arrays for testing.
*/
let array1 = Array.from("ABCD");
let array2 = Array.from("ABCD");

let isSubset = (array1, array2) => {
    /*
     * converted each array to string
     * removed the commas by replacing them 
     * with nothing in quotations marks -> ""
     */
    array1 = array1.toString().replace(/,/g, "");
    array2 = array2.toString().replace(/,/g, "");
    /*
     * using a tenary operation to check if a match exists or not
     * and console log the output.
     *
     */
    array1.match(array2) == null ? console.log(false) : console.log(true)
}

//isSubset(array1, array2);

// 1,1,2,3,5,8,13,21,34,55

function add(number = 1, stopValue, previousValue = 0) {
    previousValue = number + previousValue
    number = previousValue - number
    stopValue--
    console.log(number)
    if (stopValue != 1) add(number, stopValue, previousValue)
}


function Fibonacci(number) {
    if (number <= 1) return number;
    return Fibonacci(number - 2) + Fibonacci(number - 1);
}


let procreateNumbers = (i) => {
    while (i != 0) {
        console.log(Fibonacci(i))
        i--;
    }
}

procreateNumbers(10)
    //console.log(Fibonacci(10))