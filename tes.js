const mhs = [
  { id: 2, name: "zakiul fikri", nim: "1901010120" },
  { id: 3, name: "takiya genji", nim: "1901010121" },
  { id: 1, name: "uciha itachi", nim: "1901010122" },
  { id: 4, name: "sakata gintoki", nim: "1901010123" },
];
const nameSort = mhs.sort(function (a, b) {
  return ("" + a.name).localeCompare(b.name);
});
console.log(nameSort);
