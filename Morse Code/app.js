// morse code librarys

const morseCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": "/",
};

const alphabet = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "/": " ",
  "-·-·--": "!",
  "·-·-·-": ".",
  "--··--": ",",
  " ": "    ",
  "/": " ",
};

// hooking the HTML

const textInput = document.getElementById("text-input").value.toLowerCase();
const textOutput = document.getElementById("text-output");


// splitting the input words into an array of characters

textArray = textInput.split("");

// creating a function to access the morse library

function libraryAccess(x) {
  return morseCode[x];
}

// mapping the textArray of characters to said function

const map1 = textArray.map((thingy) => libraryAccess(thingy));

// transfering the array into a string and replacing ALL the commas with a space

let eddy = map1.toString().replace(/,/g, " ");

textOutput.innerHTML = eddy;

console.log("Step 1, get the text:", textInput);
console.log("Step 2, splitting the input words into an array of characters:", textArray);
console.log("Step 3, creating a function to access the morse library:", libraryAccess);
console.log("Step 4, mapping the textArray of characters to said function:", map1);
console.log("Step 5, transfering the array into a string and replacing ALL the commas with a space:", eddy);
