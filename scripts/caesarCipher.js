function checkLowercase(x) {
  return x.charCodeAt(0) > 96 && x.charCodeAt(0) < 123;
}

function checkUppercase(x) {
  return x.charCodeAt(0) > 64 && x.charCodeAt(0) < 91;
}

function shiftCharacter(x, shift, lower) {
  const charCode = x.charCodeAt(0);
  const char = charCode - lower;
  if (char + shift > 25) {
    return String.fromCharCode(((char + shift) % 26) + lower);
  }
  return String.fromCharCode(charCode + shift);
}

function convertLetter(x, shift) {
  let char = x;
  if (checkLowercase(x)) {
    char = shiftCharacter(x, shift, 97);
  } else if (checkUppercase(x)) {
    char = shiftCharacter(x, shift, 65);
  }
  return char;
}

function checkShift(shift) {
  return shift < 0 ? (shift % 26) + 26 : shift % 26;
}

function caesarCipher(str, shift) {
  return Array.from(str)
    .map((x) => convertLetter(x, checkShift(shift)))
    .join('');
}

module.exports = caesarCipher;
