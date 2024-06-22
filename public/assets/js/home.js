// Script para controlar la animación de escribir y borrar el texto
const messages = [
    "Creating unity by gaming",
    "Creando unidad jugando",
    "Unindo pessoas através dos jogos",
    "Создание единства через игры",
    "गेमिंग द्वारा एकता का सृजन",
    "通过游戏创造团结",
    "ゲームでの結束の創造",
    "게임을 통한 단결 창출",
    "Creazione di unità attraverso i videogiochi",
    "Création d'unité par le jeu",
    "Schaffung von Einheit durch Spiele",
    "Skapande av enhet genom spel"
];

const typingText = document.getElementById("typing-text");
let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentMessage = messages[messageIndex];
    if (isDeleting) {
        typingText.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentMessage.length) {
        isDeleting = true;
        setTimeout(type, 1000); // Espera después de escribir el mensaje completo
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        setTimeout(type, 500); // Espera después de borrar el mensaje completo
    } else {
        setTimeout(type, 100); // Tiempo entre caracteres
    }
}

// Iniciar la animación de escribir y borrar el texto
type();