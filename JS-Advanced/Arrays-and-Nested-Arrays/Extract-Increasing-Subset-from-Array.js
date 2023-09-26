function increasingNumbers(arr){
    
    const newArr = [];
    let biggestNum = Number.MIN_SAFE_INTEGER;
    arr.reduce((acc, curr)=>{
        if(acc > biggestNum){
            newArr.push(acc)
            biggestNum = acc
        };
        if(curr > biggestNum){
            newArr.push(curr)
            biggestNum = curr
        }
        
    })
    return newArr;
}

console.log(increasingNumbers([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));