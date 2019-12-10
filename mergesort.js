function split(wholeArr) {
  if (wholeArr.length === 1) {
    return [[wholeArr]];
  } else {
    let firstHalf = [];
    let secondHalf = [];
    if (wholeArr.length % 2 === 0) {
      firstHalf = wholeArr.slice(0, wholeArr.length / 2);
      secondHalf = wholeArr.slice(wholeArr.length / 2);
    } else {
      firstHalf = wholeArr.slice(0, (wholeArr.length + 1) / 2);
      secondHalf = wholeArr.slice((wholeArr.length + 1) / 2);
    }
    return [firstHalf, secondHalf];
  }
}

function merge(firstArr, secondArr) {
  let bigArr = [];
  const length = firstArr.length + secondArr.length;
  while (bigArr.length < length) {
    if (firstArr.length === 0) {
      bigArr = bigArr.concat(secondArr);
      secondArr = [];
    } else if (secondArr.length === 0) {
      bigArr = bigArr.concat(firstArr);
      firstArr = [];
    } else if (firstArr[0] < secondArr[0]) {
      bigArr.push(firstArr[0]);
      firstArr.shift();
    } else {
      bigArr.push(secondArr[0]);
      secondArr.shift();
    }
  }
  return bigArr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    //if original array is split down to ashes, then we wanna return the array and call merge on it
    //if not, we wanna call split recursively on the array
  }
  const result = split(arr);

  if (result.length !== 1) {
    return merge(split(result[0], result[1]));
  } else {
    return result;
  }
  // arr.map(ele => {if(ele.length<)split(ele)});
}
