//import vizplex from 'vizplex'
import fit from 'canvas-fit'

var rgbaFns = [
  ['sin(1/n(x/256,y/256,t/2))','n(r,x/256,y/256)','sin(r/g)/100','0.6'],
  ['n(x/256,y/256,t)','sin(r*x/64+r*y/64)','1','0.6'],
  ['n(x/32+y/32, sin(x*y/128)/2, t*10)', 'r', 'r', '0.6']
]
var canvas = $('#bg-canvas')
var fn = rgbaFns[Math.floor(Math.random() * rgbaFns.length)]

// avoid tiny canvas flash
fit(canvas)

// ensure mobile fits canvas
setTimeout(function () {
  fit(canvas)
}, 200)
vizplex(canvas, fn, {
  timeFactor: 0.05
})
window.addEventListener('resize', function () {
  fit(canvas)
})

function $ (selector) {
  return document.querySelector(selector)
}
