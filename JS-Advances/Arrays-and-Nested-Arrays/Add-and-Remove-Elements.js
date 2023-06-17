function arrayChange(commands){
    let num = 1;
    let arr = [];
    
    for(el of commands){
        if(el == 'add'){
            arr.push(num)
            num+=1
        }else{
            
            arr.pop()
            num+=1
        }
    }
    if (arr.length == 0){
        console.log('Empty');
    }else{console.log(arr.join('\n'))}
}

arrayChange(['remove', 
'remove', 
'remove']
)