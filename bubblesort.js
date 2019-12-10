function bubbleSort(input) {
    let inputSorted = []

    if (input.length === 1) {
        return input
    }

    for (let i=0; i<input.length; i++) {
        // debugger
        let currentItem = input[i]
        let nextItem = input[i+1]

        console.log("CURRENT: ", currentItem)
        console.log("NEXT: ", nextItem)
        console.log("INPUTSORTED: ", inputSorted)

        if (i >= 0 && i < input.length - 1) {
            if (currentItem > nextItem) {
                let newArray = input.slice(i+2)
                newArray.unshift(currentItem)
                inputSorted.push(nextItem)
                console.log("IF - INPUTSORTED: ", inputSorted)
                return inputSorted.concat(bubbleSort(newArray));
            } else {
                inputSorted.push(currentItem)
                console.log("ELSE - INPUTSORTED: ", inputSorted)
                let otherNewArray = input.slice(i+1)
                return inputSorted.concat(bubbleSort(otherNewArray));
            }
        } else {
            inputSorted.push(currentItem)
            return inputSorted
        }
    }

    return bubbleSort(inputSorted)

    // return inputSorted;
}