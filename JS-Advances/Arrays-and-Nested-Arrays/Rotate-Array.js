function rotateArr(arr, rotationsCount){
    let array = [...arr];
    while (rotationsCount > 0){
        const el = array.pop()
        array.unshift(el)
        rotationsCount -= 1;
        
    }
    console.log(array.join(' '))
}

rotateArr(['1', 
'2', 
'3', 
'4'], 
2)