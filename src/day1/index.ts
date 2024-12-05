import { inputTask } from "./inputTask";

// utility
function generateListsFromStringInput(input: string) {
  return input
    .split(/\s\s\s|\n/)
    .filter((x) => x !== "")
    .reduce<{ list1: number[]; list2: number[] }>(
      ({ list1, list2 }, current, index) => {
        if (index % 2 === 0) {
          list1.push(Number(current));
        } else {
          list2.push(Number(current));
        }

        return { list1, list2 };
      },
      { list1: [], list2: [] },
    );
}
// end utility

// task1
const { list1, list2 } = generateListsFromStringInput(inputTask);

const sortedList1 = [...list1].sort();
const sortedList2 = [...list2].sort();

const resultTask1 = sortedList1
  .map((item, index) => Math.abs(item - sortedList2[index]))
  .reduce((acc, curr) => acc + curr, 0);

console.log("result task1:");
console.log(resultTask1);

// end task1
// task2

// number indexed object, containing the amount of occurrences of its index
const countOfNumbersList2 = sortedList2.reduce<{ [countOf: string]: number }>(
  (acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }

    return acc;
  },
  {},
);

// multiply the occurrences by the number when available, otherwise just 0
const resultTask2 = sortedList1.reduce(
  (acc, curr) => acc + (countOfNumbersList2[curr] || 0) * curr,
  0,
);

console.log("result task2:");
console.log(resultTask2);
