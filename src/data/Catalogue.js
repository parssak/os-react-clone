import Firefox from '../apps/Firefox';
import Messages from '../apps/Messages';
import Spotify from '../apps/Spotify';
import Mail from '../apps/Mail';

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

export const Catalogue = [firefox, spotify, mail, messages]