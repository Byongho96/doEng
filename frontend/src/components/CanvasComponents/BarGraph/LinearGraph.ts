export class LinearGraph {
  canvasWidth: number
  canvasHeight: number
  maxPoint: number
  nowPoint: number
  percentage: number
  maxX: number
  x: number
  y: number
  speedMaxX: number
  speedFrontX: number
  maxLineX: number
  frontLineX: number

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    maxPoint: number,
    nowPoint: number,
  ) {
    this.canvasWidth = canvasWidth * 0.9
    this.canvasHeight = canvasHeight
    this.maxPoint = maxPoint
    this.nowPoint = nowPoint
    this.percentage = nowPoint / maxPoint
    this.maxX = 0.1 * canvasWidth + canvasWidth * 0.8 * this.percentage
    this.x = 0.1 * canvasWidth
    this.y = 0.55 * canvasHeight
    this.speedMaxX = 1.2
    this.speedFrontX = 1.3
    this.maxLineX = this.x
    this.frontLineX = this.x
  }

  fillMaxBong(ctx: CanvasRenderingContext2D, color: string) {
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineCap = "round"
    ctx.lineWidth = 22
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.maxLineX, this.y)
    ctx.stroke()
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
    if (this.maxLineX >= this.canvasWidth && this.speedMaxX) {
      this.speedMaxX = 0
      this.maxLineX = this.canvasWidth
      return
    } else {
      this.maxLineX = this.maxLineX + this.speedMaxX ** 2
      this.speedMaxX += 0.02
    }
  }
  fillFrontBong(ctx: CanvasRenderingContext2D, color: string) {
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 15
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.frontLineX, this.y)
    ctx.stroke()
    // ctx.fillStyle = `rgba(255, 200, 0, 1)`
    ctx.fill()
    ctx.closePath()
    if (this.frontLineX >= this.maxX && this.speedFrontX) {
      this.speedFrontX = 0
      this.frontLineX = this.maxX
      return
    } else if (this.speedFrontX >= 0.003) {
      this.frontLineX += this.speedFrontX ** 2
      this.speedFrontX -= 0.0011
    }
  }
}
