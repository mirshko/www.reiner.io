
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const shapes = document.querySelectorAll('.shapes div')
shapes.forEach(el => {
  let size = randomInt(40, 160)
  let positionX = randomInt(0, 100)
  let positionY = randomInt(0, 100)

  size = `${size}px`

  el.style.width = size
  el.style.height = size

  positionX = `${positionX}%`
  positionY = `${positionY}%`

  el.style.top = positionY
  el.style.right = positionX
})




console.log(`
    __     ______     ______   ______
   /\\ \\   /\\  ___\\   /\\  ___\\ /\\  ___\\
  _\\_\\ \\  \\ \\  __\\   \\ \\  __\\ \\ \\  __\\
 /\\_____\\  \\ \\_____\\  \\ \\_\\    \\ \\_\\
 \\/_____/   \\/_____/   \\/_/     \\/_/


`)
console.log('Hey! I see you\'re peeking at my code, why don\'t you just DM me and we can chat? https://www.twitter.com/mirshko')
