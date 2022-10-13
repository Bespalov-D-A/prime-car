const videoModule = () => {
  const video = document.getElementById('amazed-video')
  const play = document.getElementById('amazed-play')

  const playFunc = () => {
    if (video.paused) {
      video.play()
      play.style.display = 'none'
    } else {
      video.pause()
      play.style.display = 'block'
    }
  }

  play.addEventListener('click', () => {
    playFunc()
  })

  video.addEventListener('click', () => {
    playFunc()
  })
}

module.exports = videoModule
