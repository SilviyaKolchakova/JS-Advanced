function oddPosition(arr) {
    let newArr = arr.map(x => x*2   
    
    ).filter(function(el){
        if(arr.indexOf(el) % 2 == 1){
            
            return el
        }
        
    })
    return newArr.reverse()
   
}


console.log(oddPosition([10, 15, 20, 25]))
