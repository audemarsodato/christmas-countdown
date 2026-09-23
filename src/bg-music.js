
const bgMusic = document.getElementById('bg-music')

document.addEventListener("click", () => {
        bgMusic.play()
}, { once: true })

const tracks = [
        "assets/bg-musics/music2.mp3",
        "assets/bg-musics/music1.mp3"
]

let currentTrack = 0

function playNextTrack() {
        bgMusic.src = tracks[currentTrack]
        bgMusic.play();

        currentTrack = (currentTrack + 1) % tracks.length
}

bgMusic.addEventListener("ended", playNextTrack)

playNextTrack()