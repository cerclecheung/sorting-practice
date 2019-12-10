// function bubbleSort(input) {
//   if (input.length <= 1) {
//     return input;
//   } else {
//     let inputSorted = [];
//     let examInput = [...input];
//     for (let i = 0; i < input.length - 1; i++) {
//       console.log(i);
//       console.log("examInput: ", examInput);
//       console.log("inputSorted: ", inputSorted);
//       if (examInput[i] <= examInput[i + 1]) {
//         inputSorted.push(examInput[i]);
//         examInput = examInput.slice(i + 1);
//       } else {
//         inputSorted.push(examInput[i + 1]);
//         examInput.splice(i + 1, 1);
//       }
//     }
//     inputSorted.push(examInput[examInput.length - 1]);
//     return bubbleSort(inputSorted);
//   }
//   //   function wrapper(input) {
//   //       debugger;
//   //       let currentItem = input[i];
//   //       let nextItem = input[i + 1];
//   //       console.log("CURRENT: ", currentItem);
//   //       console.log("NEXT: ", nextItem);
//   //       if (i >= 0 && i < input.length - 1) {
//   //         if (currentItem > nextItem) {
//   //           let newArray = input.slice(i + 2);
//   //           newArray.unshift(currentItem);
//   //           inputSorted.push(nextItem);
//   //           console.log("IF - INPUTSORTED: ", inputSorted);
//   //           return inputSorted.concat(bubbleSort(newArray));
//   //         } else {
//   //           inputSorted.push(currentItem);
//   //           console.log("ELSE - INPUTSORTED: ", inputSorted);
//   //           let otherNewArray = input.slice(i + 1);
//   //           return inputSorted.concat(bubbleSort(otherNewArray));
//   //         }
//   //       } else {
//   //         inputSorted.push(currentItem);
//   //         return inputSorted;
//   //       }
//   //     }
//   //     console.log("INPUTSORTED: ", inputSorted);
//   //     return wrapper(inputSorted);
//   //   }
//   //   if (input.length > 1) {
//   //     return wrapper(input);
//   //   }
// }
