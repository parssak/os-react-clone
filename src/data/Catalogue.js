import Firefox from '../apps/Firefox';
import Messages from '../apps/Messages';
import Spotify from '../apps/Spotify';
import Mail from '../apps/Mail';
import Drawing from '../apps/Drawing';
import Terminal from '../apps/Terminal';
import Todo from '../apps/Todo';

const firefox = {
    name: "chrome",
    color: '#ff4500',
    body: <Firefox />,
    image: './images/chrome.png'
}

const spotify = {
    name: "spotify",
    color: 'limegreen',
    body: <Spotify />,
    image: './images/spotify.png'
}
const mail = {
    name: "mail",
    color: 'lightblue',
    body: <Mail />,
    image: './images/mail.png'
}
const messages = {
    name: "messages",
    color: 'green',
    body: <Messages />,
    image: './images/messages.png'
}

const drawing = {
    name: "draw",
    color: 'green',
    body: <Drawing />,
    image: './images/chrome.png'
}

const terminal = {
    name: "terminal",
    color: 'green',
    body: <Terminal />,
    image: './images/terminal.png'
}

const todo = {
    name: "todo",
    color: 'green',
    body: <Todo/>,
    image: './images/messages.png'
}

export const Catalogue = [firefox, spotify, mail, messages, terminal, todo]