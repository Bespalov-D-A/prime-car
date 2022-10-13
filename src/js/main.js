import {Loader, LoaderOptions} from 'google-maps';
const test = require('./modules/test.js')



const ready = () => {
  test()
}

document.addEventListener('DOMContentLoaded', ready)
