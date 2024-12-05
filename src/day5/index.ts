// sanitize input

import { rulesInput, updatesInput } from "./inputTask";

const rules: [number, number][] = rulesInput.split("\n").map((rule) => {
  const splitRules = rule.split("|");
  return [Number(splitRules[0]), Number(splitRules[1])];
});

const updates = updatesInput.split("\n").map((update) => {
  const splitUpdate = update.split(",");
  return splitUpdate.map((elem) => Number(elem));
});

const resultTask1 = [];

for (const update of updates) {
  for (let i = 0; i < update.length; i++) {
    let ruleBroken = false;
    for (const rule of rules) {
      if (update[i] === rule[0]) {
        ruleBroken = !update.slice(0, i).every((elem) => elem !== rule[1]);

        if (ruleBroken) {
          // we broke a rule, we can exit out of the rule + current update
          break;
        }
      }
    }

    if (ruleBroken) {
      // jump out of loop
      break;
    }

    // if we're at the end, and we have not breaked before, we have a correct one yay
    if (i === update.length - 1) {
      resultTask1.push(update);
    }
  }
}

console.log(
  resultTask1.reduce((acc, cur) => {
    return acc + cur[Math.floor(cur.length / 2)];
  }, 0),
);

// task 2

const resultTask2: number[][] = [];
const resultTask2Index: number[] = [];

for (let update of updates) {
  for (let i = 0; i < update.length; i++) {
    let ruleBroken = false;
    for (let j = 0; j < rules.length; j++) {
      if (update[i] === rules[j][0]) {
        ruleBroken = !update.slice(0, i).every((elem) => elem !== rules[j][1]);

        // rule is broken, we now fix this
        if (ruleBroken) {
          // search the element which breaks stuff
          const elem = update
            .slice(0, i)
            .find((elem) => elem === rules[j][1]) as number;
          // get index of element which breaks stuff
          const indexOfElem = update.slice(0, i).indexOf(elem);

          // since we have a update that has errors, we add the index of the update to our results
          // we will be able to find it later, because we add ALL
          // (corrected and already correct ones, to a new array)
          const uniqueEntryIndex = updates.indexOf(update);
          if (
            uniqueEntryIndex !== -1 &&
            !resultTask2Index.includes(uniqueEntryIndex)
          ) {
            resultTask2Index.push(uniqueEntryIndex);
          }

          // classic swap element
          const temp = update[i];
          update[i] = elem;
          update[indexOfElem] = temp;

          // fuck it all, we start again for this update and search all over again #easyMode
          j = 0;
          i = 0;
          ruleBroken = false;
        }
      }
    }

    // when we are at the end, which will happen since we start over and over
    // we will just add the result to our resultTask2. resultTask2 will have same length as
    // updates array
    if (i === update.length - 1) {
      resultTask2.push(update);
    }
  }
}

const sumMiddlePartTask2 = resultTask2Index.reduce((acc, curr) => {
  return acc + resultTask2[curr][Math.floor(resultTask2[curr].length / 2)];
}, 0);

console.log(sumMiddlePartTask2);
