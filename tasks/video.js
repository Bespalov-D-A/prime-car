const { src, dest } = require('gulp')

// Configuration
const path = require('../config/path.js')
const settings = require('../config/settings.js')

//Plugins
const plumber = require('gulp-plumber') // Выводим сообщения
const notify = require('gulp-notify') // Перенаправляем сообщения в ОС
const newer = require('gulp-newer') 

// processing
const video = () => {
  return src(path.video.src)
    .pipe(plumber(settings.plumber(notify, 'Video Error')))
    .pipe(newer(path.video.dest))
    .pipe(dest(path.video.dest))
}

module.exports = video
