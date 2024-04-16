// code your solution here
function superbowlWin(record) {
  const winningGame = record.find((record) => record.result === "W");
  return winningGame ? winningGame.year : undefined;
}

const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

superbowlWin(record);
console.log(superbowlWin(record));
