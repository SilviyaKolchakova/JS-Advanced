function print(arr, num){
    const arr1 = arr;
    let newArr = [];
    let i = 0;

    do {
        newArr.push(arr1[i]);
        i+=num;
    } while (i < arr1.length);
    return(newArr)
    }

print(['5', 
'20', 
'31', 
'4', 
'20'], 
2)