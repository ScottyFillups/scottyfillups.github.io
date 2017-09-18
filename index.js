//import vizplex from 'vizplex'
import fit from 'canvas-fit'

var rgbaFns = [
  'sin(1/n(x/256,y/256,t))',
  '1',
  'r',
  '0.1'
]
var canvas = $('#bg-canvas')

fit(canvas)
vizplex(canvas, rgbaFns, {
  timeFactor: 0.05
})
window.addEventListener('resize', function () {
  fit(canvas)
})

function $ (selector) {
  return document.querySelector(selector)
}
