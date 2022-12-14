const { task, src, watch, series, parallel } = require('gulp')
const ghPages = require('gulp-gh-pages');
const browserSync = require('browser-sync').create()

// Configuration
const enableServer = true
const path = require('./config/path.js')
const settings = require('./config/settings.js')

// Tasks
const clear = require('./tasks/clear.js')
const html = require('./tasks/html.js')
const scss = require('./tasks/scss.js')
const js = require('./tasks/js.js')
const img = require('./tasks/img.js')
const font = require('./tasks/font.js')
const video = require('./tasks/video.js')

// Server
const server = () => {
  if (!enableServer) return
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  })
}

// Watching the file
const watcher = () => {
  watch(path.html.watch, html).on('all', browserSync.reload)
  watch(path.scss.watch, scss).on('all', browserSync.reload)
  watch(path.js.watch, js).on('all', browserSync.reload)
  watch(path.img.watch, img).on('all', browserSync.reload)
  watch(path.font.watch, font).on('all', browserSync.reload)
  watch(path.video.watch, video).on(
    'all',
    browserSync.reload
  )
}
exports.html = html
exports.scss = scss
exports.js = js
exports.img = img
exports.font = font
exports.video = video

const build = series(
  clear,
  parallel(html, scss, js, img, video, font)
)
const dev = series(build, parallel(watcher, server))

task(
  'deploy',
  series(clear, build, () =>
    src('./public/**/*').pipe(ghPages())
  )
)

// Build
exports.default = settings.isProduction ? build : dev
