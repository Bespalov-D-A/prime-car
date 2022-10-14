import AOS from 'aos'
const video = require('./modules/video.js')
const mobile = require('./modules/mobile-menu.js')
const Flickity = require('./flickity.pkd.min.js')

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


const ready = () => {
  mobile()
  video()
}

document.addEventListener('DOMContentLoaded', ready)
