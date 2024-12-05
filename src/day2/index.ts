import { task1 } from "./inputTask";

// conform data format like [ ..., [ '38', '38', '37', '39', '41', '39' ], ... ]
const conformData = task1
  .split(/\n/)
  .flatMap((value) => (!value ? [] : value))
  .map((value) =>
    value
      .split(new RegExp(/(\d+ |\d+)*\n/, "gm"))
      .flatMap((value) => value.split(" ")),
  );

const differenceArray: number[][] = [];

// we count the difference between i and i+1, starting from left => save that to array
for (const level of conformData) {
  if (differenceArray.push([]))
    for (let index = 0; index < level.length - 1; index++) {
      differenceArray[differenceArray.length - 1].push(
        Number(level[index]) - Number(level[index + 1]),
      );
    }
}

let result = 0;
differenceArray.filter((differenceInLevel) => {
  let positive = undefined;
  let index = 0;
  let wrongAnswers = 0;
  for (const differenceNumber of differenceInLevel) {
    // it can only increase or decrease, we identify this by checking the first number
    // all must be the same from here
    if (positive === undefined) {
      positive = differenceNumber > 0;
    }

    // apply the rules of the game
    if (
      differenceNumber === 0 ||
      (positive && differenceNumber < 0) ||
      (!positive && differenceNumber > 0) ||
      differenceNumber < -3 ||
      differenceNumber > 3
    ) {
      // task1
      break;
      // task2 (comment out task1)
      // wrongAnswers += 1;
    }

    if (differenceInLevel.length - 1 === index) {
      // task1
      result++;
      // task 2 (comment out task1)
      // if (wrongAnswers < 2) result++;
      break;
    }

    index++;
  }
});

console.log("task1");
console.log(result);
