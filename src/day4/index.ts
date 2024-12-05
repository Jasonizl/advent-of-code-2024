import { task1 } from "./inputTask";

const solutions = ["1 2 3 4"];

// i, i+1, i+2, i+3 = XMAS (j = j)
// i, i-1, i-2, i-3 = SAMX (j = j)
// j, j+1, j+2, j+3 = X|M|A|S (i = i)
// j, j-1, j-2, j-3 = S|A|M|X (i = i)
//
// i, i+1, i+2, i+3 = oben rechts
// j, j+1, j+2, j+3
//
// i, i+1, i+2, i+3 = unten rechts
// j, j-1, j-2, j-3
//
// i, i-1, i-2, i-3 // oben links
// j, j+1, j+2, j+3
//
// i, i-1, i-2, i-3 // oben links
// j, j-1, j-2, j-3

let normalizedInput = task1.split("\n");
const x = normalizedInput.map((elem) => Array.from(elem));

// XMASMSSAMSMSMASSMASMXMASSMAMMSAMXXMAS
const normalizedInputFlat = normalizedInput.reduce(
  (acc, curr) => acc + curr,
  "",
);

const lineLength = task1.indexOf("\n");
const lines = task1.split("\n").length;

console.log(lines);
console.log(lineLength);
console.log(normalizedInputFlat.length);

const resultIndices: [number, number][] = [];

for (let j = 0; j < lines; j++) {
  for (let i = 0; i < lineLength; i++) {
    const mappedJtoI = i + j * lines;

    if (i < lineLength - 4) {
      if (
        normalizedInputFlat.slice(i + j * lines, i + j * lines + 4) ===
          "XMAS" ||
        normalizedInputFlat.slice(i + j * lines, i + j * lines + 4) === "SAMX"
      ) {
        console.log("FOUND %d %d", i, j);
        resultIndices.push([i, j], [i, j + 1], [i, j + 2], [i, j + 3]);
      }
    }

    if (j < lineLength - 4) {
    }

    // unten rechts
    if (i < lineLength - 4 && j < lineLength - 4) {
    }

    // oben rechts
    if (i < lineLength - 4 && j > 4) {
    }

    // unten links
    // if (i > 4 && j < lineLength - 4) {
    // }
    //
    // // oben links
    // if (i > 4 && j > 4) {
    // }
  }
}

console.log(lineLength);
