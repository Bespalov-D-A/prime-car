import AOS from 'aos'
const test = require('./modules/video.js')

AOS.init({
  once: true,
})

var elem = document.querySelector('.carousel')
var elemTwo = document.querySelector('.carousel-two')

var flkty = new Flickity(elem, {
  cellAlign: 0.2,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  contain: true,
  freeScroll: true,
  autoPlay: true,
})

var flktyTwo = new Flickity(elemTwo, {
  cellAlign: 0.5,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  contain: true,
  freeScroll: true,
})

//flktyTwo.next();
//flktyTwo.select( 2 );
//flkty.resize()
//flkty.reposition()

const ready = () => {
  test()
}

document.addEventListener('DOMContentLoaded', ready)
