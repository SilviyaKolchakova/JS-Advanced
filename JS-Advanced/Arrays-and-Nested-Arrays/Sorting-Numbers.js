function sortNumbers(arr) {
    let sorted = arr.sort((numA, numB)=>{return numA-numB});
    
    let result = [];
    let counter = sorted.length
    while(counter > 0){
        result.push(sorted.shift());
        counter -= 1;
        result.push(sorted.pop());
        counter -= 1;
    }

    return result
    
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);