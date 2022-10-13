const test = require('./modules/video.js')

var elem = document.querySelector('.carousel');
var elemTwo = document.querySelector('.carousel-two');

var flkty = new Flickity( elem, {
	cellAlign: 'left',
prevNextButtons: false,
	pageDots: false,
	wrapAround: true,
	contain: true,
	freeScroll: true
});

var flktyTwo = new Flickity( elemTwo, {
	cellAlign: 'left',
prevNextButtons: false,
	pageDots: false,
	wrapAround: true,
	contain: true,
	freeScroll: true
});

//flktyTwo.next();
//flktyTwo.select( 2 );
//flkty.resize()
//flkty.reposition()

const ready = () => {
  test()
}

document.addEventListener('DOMContentLoaded', ready)
