const canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d')
let timer, totalBall, mouseX, mouseY,
  balls = []

class Ball {
  constructor(x, y, r, vel) {
    this.x = x
    this.y = y
    this.r = r
    this.vel = vel
    this.angle = 2 * Math.PI * Math.random()
  }

  update() {
    this.angle += -Math.PI / 12 / 2 + Math.PI / 12 * Math.random()
    this.x += this.vel * Math.cos(this.angle)
    this.y += this.vel * Math.sin(this.angle)
  }

  draw() {
    ctx.fillStyle = '#eee'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    ctx.fill()
  }
}

function init() {
  initCanvas()
  bindEvents()
}

function initCanvas() {
  let i = 0

  cancelAnimationFrame(timer)
  canvas.width = document.querySelector('.main').offsetWidth
  canvas.height = document.querySelector('.main').offsetHeight
  totalBall = canvas.width * canvas.height / 20000
  balls = []
  for (; i < totalBall; i++) {
    balls.push(new Ball(10 + (canvas.width - 20) * Math.random(), 10 + (canvas.height - 20) * Math.random(), 10, 0.5))
  }
  update()
}

function update() {
  detectCollide()
  balls.forEach(ball => {
    ball.update()
  })
  draw()
  timer = requestAnimationFrame(update)
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  balls.forEach(ball => {
    ball.draw()
  })
  linkBalls()
  linkMouse()
}

function linkBalls() {
  for (let i = 0; i < balls.length; i++) {
    for (let j = i; j < balls.length; j++) {
      const distance = Math.sqrt(Math.pow(balls[i].x - balls[j].x, 2) + Math.pow(balls[i].y - balls[j].y, 2))

      if (distance < 200) {
        ctx.strokeStyle = `rgba(230, 230, 230, ${50 / distance})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(balls[i].x, balls[i].y)
        ctx.lineTo(balls[j].x, balls[j].y)
        ctx.stroke()
      }
    }
  }
}

function linkMouse() {
  if (!mouseX || !mouseY) {
    return
  }
  for (let i = 0; i < balls.length; i++) {
    const distance = Math.sqrt((balls[i].x - mouseX) ** 2 + (balls[i].y - mouseY) ** 2)

    if (distance < 300) {
      ctx.strokeStyle = `rgba(230, 230, 230, ${50 / distance})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(balls[i].x, balls[i].y)
      ctx.lineTo(mouseX, mouseY)
      ctx.stroke()
    }
  }
}

function mousemove(e) {
  let {target} = e

  mouseX = e.offsetX
  mouseY = e.offsetY
  while (target.className !== 'main') {
    mouseX += target.offsetLeft
    mouseY += target.offsetTop
    target = target.offsetParent
  }
}

function detectCollide() {
  balls.forEach(ball => {
    if (ball.x - ball.r < 0 || ball.x + ball.r > canvas.width) {
      ball.angle -= Math.PI
    }
    if (ball.y - ball.r < 0 || ball.y + ball.r > canvas.height) {
      ball.angle -= Math.PI
    }
  })
}

function bindEvents() {
  window.addEventListener('resize', initCanvas)
  document.querySelector('.main').addEventListener('mousemove', mousemove)
}

init()
