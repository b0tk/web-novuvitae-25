document.addEventListener('DOMContentLoaded', function() {
    MusicKit.configure({
        developerToken: '<%= developerToken %>',  // Reemplaza con tu token de desarrollador
        app: {
            name: 'Nombre de tu App',
            build: '1.0.0'
        }
    });
});

const music = MusicKit.getInstance();

function playMusic() {
    const player = document.getElementById('musicPlayer');
    if (player.classList.contains('minimized')) {
        toggleMinimize();
    }
    music.setQueue({ url: '<%= stationUrl %>' }) // Reemplaza con la URL de tu estación de radio
        .then(() => {
            music.play();
        });
}

function toggleMinimize() {
    const player = document.getElementById('musicPlayer');
    const icon = document.getElementById('minimizeIcon');
    player.classList.toggle('minimized');
    if (player.classList.contains('minimized')) {
        icon.src = "https://img.icons8.com/ios-filled/50/000000/plus.png";
    } else {
        icon.src = "https://img.icons8.com/ios-filled/50/000000/minus.png";
    }
}