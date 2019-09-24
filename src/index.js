const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let phrase = "";
  let code = "";   
  
  for (let s = 0; s <= expr.length; s += 10) { 
    let value = expr.substr(s, 10);
           
    for (let i = 0; i < value.length; i++) {
      if (value[i] == 1 & value[i + 1] == 1) {
      code += "-";
      i++;   
      }
      if (value[i] == 1 & value[i + 1] == 0) {
      code += ".";
      i++;
      }
      if (value[i] == 1 & value[i + 1] == undefined & (i + 1) !== value.length) {
      code += ".";
      i++;    
      }  
    }
  
  phrase += MORSE_TABLE[ code ] ? MORSE_TABLE[ code ] : " ";
  code = "";  
  }
  return phrase = phrase.trim();
}

module.exports = {
    decode
}