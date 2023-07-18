// const string = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
// const string = "Lorem a aaaa";
const string = "1234567";
const charachter = "a";

const countCharacters = (char, str) => {
  return str.split("").filter((x) => x == char).length;
};

console.log(countCharacters(charachter, string));
