const mecab = require("mecab-ya");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

rl.on("line", (line) => {
  printParsedResult(line);
});

rl.on("close", () => {
  process.exit();
});

const printParsedResult = (text) => {
  mecab.nouns(text, (err, result) => {
    console.log("nouns : ", result);
  });
};
