import translate from './translator.js';
//Some comment so i can commit something
const main = () => {
    const input = document.querySelector('#morse-code');
    const chatContainer = document.querySelector('.chat-container')
    input.addEventListener('keydown', e => {
        if(e.key == 'Enter'){
            e.preventDefault();
            chatContainer.appendChild(paintChat({myMessage: true, text:`${input.value}`}))
            chatContainer.appendChild(paintChat({myMessage: false, text:`Translates to: \n <b>${translate(input.value)}</b>`}))
            chatContainer.scrollTo(0, chatContainer.scrollHeight);
            input.value = '';
        }
    } )
}

const paintChat = ({myMessage, text}) => {
    const html = `<div class="message ${ myMessage ? 'my-message' : 'your-message'}"> <p>${text}</p></div>`
    const element = document.createElement('div');
    element.innerHTML = html;
    return element.firstElementChild; 
}

main();