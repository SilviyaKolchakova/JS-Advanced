function sortArray(arr){
    let sorted = arr.sort((nameA, nameB) =>
    nameA.localeCompare(nameB)
  );

    let numbered = []
    
    let number = 1;
    for (let el of sorted) {
        
        numbered.push(`${number}.${el}`)
        if (number < arr.length){
            number+=1
        }
    }
    let output = numbered.join("\n");
    console.log(output);
}

sortArray(["John", "Bob", "Christina", "Ema"])