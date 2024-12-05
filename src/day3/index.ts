import { task1 } from "./inputTask";

const regex = new RegExp(
  /(mul\((?:0|[1-9][0-9]*),(?:0|[1-9][0-9]{0,2})\))/,
  "g",
);

const regexNumberExtractor = new RegExp(/\d{1,3}/, "g");

const matches = task1.match(regex);

if (matches) {
  const result = matches.reduce((acc, curr) => {
    const numberMatches = curr.match(regexNumberExtractor);
    return acc + Number(numberMatches?.at(0)) * Number(numberMatches?.at(1));
  }, 0);

  console.log(result);
}
