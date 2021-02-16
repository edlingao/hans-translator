import { default as morseCodeFile } from './alphabet.js';

function translate(morseCodeString){
    let translatedString= ``;
    const words = morseCodeString.split('/');
    const translation = words.map( word => {
        const letters = word.split(' ');
        const translatedWord = letters.filter( letter => letter != '').map( letter =>{
            translatedString += `${morseCodeFile[letter] != null ? morseCodeFile[letter] : ''}`
        })
        translatedString += ' ';
        return translatedWord;
    })
    return translatedString;
}

export default translate;