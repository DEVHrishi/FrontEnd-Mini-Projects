const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message one',
    'Message two',
    'Message three',
    'Message four',
]

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type =null) {
    

    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(type ? type : getRandomType());
    toast.innerHTML = message ? message : getRandomMessage();

    toasts.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}
