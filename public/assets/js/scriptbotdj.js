document.addEventListener('DOMContentLoaded', () => {
    const playerContainer = document.getElementById('playerContainer');
    const toggleButton = document.getElementById('toggleButton');
    const playPauseButton = document.getElementById('playPauseButton');
    const muteButton = document.getElementById('muteButton');
    const trackTitle = document.getElementById('trackTitle');
    const trackArtist = document.getElementById('trackArtist');

    toggleButton.addEventListener('click', () => {
        playerContainer.classList.toggle('active');
        toggleButton.textContent = playerContainer.classList.contains('active') ? '⬇️' : '⬆️';
    });

    const music = MusicKit.getInstance();
    playPauseButton.addEventListener('click', () => {
        if (music.player.isPlaying) {
            music.player.pause();
        } else {
            music.player.play();
        }
    });

    muteButton.addEventListener('click', () => {
        music.player.muted = !music.player.muted;
    });

    // Update track info
    music.player.addEventListener('mediaItemDidChange', () => {
        const currentTrack = music.player.nowPlayingItem;
        if (currentTrack) {
            trackTitle.textContent = currentTrack.title;
            trackArtist.textContent = currentTrack.artistName;
        }
    });

    // Initialize MusicKit
    MusicKit.configure({
        developerToken: 'YOUR_DEVELOPER_TOKEN',
        app: {
            name: 'Your App Name',
            build: 'YOUR_APP_BUILD_NUMBER',
        },
    });

    // Set your music user token here
    music.setQueue({
        url: 'https://music.apple.com/us/playlist/your-playlist-url'
    }).then(() => {
        music.player.play();
    });
});