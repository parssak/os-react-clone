import Firefox from './apps/Firefox';
import Messages from './apps/Messages';
import Spotify from './apps/Spotify';
import Mail from './apps/Mail';

const firefox = {
    name: "firefox",
    color: '#ff4500',
    body: <Firefox />
}

const spotify = {
    name: "spotify",
    color: 'limegreen',
    body: <Spotify />
}
const mail = {
    name: "mail",
    color: 'lightblue',
    body: <Mail />
}
const messages = {
    name: "messages",
    color: 'green',
    body: <Messages />
}

export const Catalogue = [firefox, spotify, mail, messages]