let getNumberGreaterThan16ToPower4 = ()=>{
    const min = 5;
    const max = 256;
    const numbersExcluded = [1,2,4,8];
    let result;
    let i = min;
    let answer;
    // loop through the power starting from 5 to 256;
    while(i >= min && i <= max){
        let numberToString = "";
        let arrayOfNumbers = [];
        
        // get the results of 16 to the power of i
        result = Math.pow(16,i);
        numberToString = result.toString(10);

        // check if results returns a number or infinity
        if(!isFinite(numberToString)) {
            answer = `There was no base 10 number that resulted from a power greater than 16^4 that excluded digits 1, 2, 4, or 8. The returned value was ${numberToString}` ;
            break;
        }
        // if results return a number loop through string and add each number to array
        for(let x = 0; x < numberToString.length; x++){
            arrayOfNumbers.push(Number(numberToString[x]));
        }
        
        // compare array of numbers with the numbers to be excluded (1,2,4,8)
        result = numbersExcluded.filter((n)=>{
            return arrayOfNumbers.indexOf(n) !== -1; 
        })
        if(result.length === 0) {
            answer = `16^${i} returned a base 10 number that does not include 1, 2, 4, or 8. The returned number is ${numberToString}`
            break;
        };
        i++;
    }

    return answer;
}
export default getNumberGreaterThan16ToPower4;