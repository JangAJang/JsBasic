const mecab = require("mecab-ya");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const DataMap = require("./dataMap");

const nouns = new DataMap();

const rl = readline.createInterface({ input, output });

rl.on("line", (line) => {
  if (line === "end") {
    rl.close();
    return;
  }

  printParsedResult(line);
});

rl.on("close", () => {
  console.log(nouns.getDatasOrderByCountDesc());
  process.exit();
});

const printParsedResult = (text) => {
  mecab.nouns(text, (err, result) => {
    console.log("nouns : ", result);
    nouns.addData(result);
  });
};
