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

function decode(code){
  let arr = []
  let subArr = []
  let star = code.replace(/\*/g, '7').match(/\d{10}/g)
  
  for (let index = 0; index < star.length; index++) {
    arr.push(star[index].replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, '').replace(/7{10}/g, ' '))
  }
  

  for (let index = 0; index < arr.length; index++) {
    arr[index] === ' ' && subArr.push(' ')
    for (const key in MORSE_TABLE) {
          key === arr[index] && subArr.push(MORSE_TABLE[key])
        }
      }
   return subArr.join('')
}

module.exports = {
    decode
}