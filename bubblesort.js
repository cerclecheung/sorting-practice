function bubbleSort(input) {
  if (input.length <= 1) {
    return input;
  } else {
    let inputSorted = [];
    let counter = 0;
    const length = input.length;
    for (let i = 0; i < length - 1; i++) {
      if (input[0] <= input[1]) {
        inputSorted.push(input[0]);
        input = input.slice(1);
        counter++;
      } else {
        inputSorted.push(input[1]);
        input.splice(1, 1);
      }
    }
    inputSorted.push(input[input.length - 1]);

    if (counter < length - 1) {
      return bubbleSort(inputSorted);
    } else {
      return inputSorted;
    }
  }
}
