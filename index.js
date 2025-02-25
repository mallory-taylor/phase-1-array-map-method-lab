const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// titleCased(): returns an array with title case tutorial names. 
// Note that this function takes no arguments and should use the global tutorials variable as data.
const titleCased = () => {
  return tutorials.map((strings) => {
    let stringSplit = strings.split(" ");
  const capitalizedFirst = stringSplit.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
    return capitalizedFirst.join(" ");
  });
}
 