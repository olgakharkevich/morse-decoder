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

function _chunk(str, n) {
    let ret = [];
    let i;
    let len;
    for(i = 0, len = str.length; i < len; i += n) {
       ret.push(str.substr(i, n))
    }
    return ret
};

function decode(expr) {
    let arr = _chunk(expr, 10);
    let _res = String();
    arr.forEach(el => {``
        if (el == '**********') {_res += ' ';
        } else {
            el = Number(el).toString();
            let str = _chunk(el, 2).join(',');
            str = str.replace( /10/g, ".");
            str = str.replace( /11/g, "-");
            str = str.replace( /\,/g, '');
            el = MORSE_TABLE[str];
            _res += el;
        }
        
    });
    return _res;
}

module.exports = {
    decode
}