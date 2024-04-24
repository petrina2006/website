document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const songList = document.querySelectorAll('#song-list li a');

    songList.forEach(function(song) {
        song.addEventListener('click', function(e) {
            e.preventDefault();
            const songSrc = this.getAttribute('data-src');
            audioPlayer.src = songSrc;
            audioPlayer.play();
        });
    });
});

// Existing JavaScript code
z