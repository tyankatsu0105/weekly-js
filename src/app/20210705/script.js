// =====================================
// setups
// =====================================

const container = document.getElementById('container')
const canvas = document.getElementById('canvas')
const pen = document.getElementById('pen')
const bold = document.getElementById('bold')
const color = document.getElementById('color')
const colorBack = document.getElementById('color-back')

const size = {
  width: container.clientWidth,
  height: container.clientHeight,
}

canvas.setAttribute('width', size.width)
canvas.setAttribute('height', size.height)

/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext('2d')

// =====================================
// canvas setups
// =====================================
ctx.lineCap = 'round'
let isPainting = false

/**
 * @param {string} color : ;
 */
const updatePencilColor = (color) => {
  colorBack.style.backgroundColor = color
  ctx.strokeStyle = color
}
const updatePencilBold = (bold) => ctx.lineWidth = bold

const init = () => {
  updatePencilColor('red')
  updatePencilBold(10)
}

init()

// =====================================
// color
// =====================================

/**
 * 
 * @param {Event} event 
 */
const changeColor = (event) => {
  updatePencilColor(event.target.value)
}

color.onchange = changeColor



// =====================================
// mouseDown
// =====================================

/**
 * @param {MouseEvent} event 
 */
const mouseDown = (event) => {
  isPainting = true
}

// =====================================
// mouseUp
// =====================================

/**
 * @param {MouseEvent} event 
 */
const mouseUp = (event) => {
  isPainting = false

  lastX = undefined
  lastY = undefined
}

// =====================================
// paint
// =====================================
let lastX = undefined
let lastY = undefined
/**
 * @param {MouseEvent} event 
 */
const paint = (event) => {
  if(!isPainting) return 

  const x = event.pageX
  const y = event.pageY
  if(lastX === undefined) lastX = x
  if(lastY === undefined) lastY = y

  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(x, y)
  ctx.stroke()

  lastX = x
  lastY = y
}

// =====================================
// event handlers
// =====================================

canvas.onmousedown = mouseDown
canvas.onmouseup = mouseUp
canvas.onmousemove = paint