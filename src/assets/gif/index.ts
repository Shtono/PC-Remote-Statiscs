import R2D2 from "./R2D2.gif"
import Fallout from "./fallout_gif_1.gif"
import COD from "./cod_gif.gif"
import Game from "./game_1.gif"
import GameOver from "./gameover.webp"
import PS from "./ps.webp"
import Xbox from "./xbox.webp"
import Cuphead from "./cuphead.webp"
import Cuphead2 from "./cuphead2.webp"
import gif_1 from "./1.webp"
import gif_2 from "./2.webp"
import gif_3 from "./3.webp"
import gif_4 from "./4.webp"
import gif_5 from "./5.webp"
import gif_6 from "./6.webp"
import gif_7 from "./7.webp"
import gif_8 from "./8.webp"
import gif_9 from "./9.webp"
import gif_10 from "./10.webp"

const gifsArray = [
  R2D2,
  Fallout,
  COD,
  Game,
  GameOver,
  PS,
  Xbox,
  Cuphead,
  Cuphead2,
  gif_1,
  gif_2,
  gif_3,
  gif_4,
  gif_5,
  gif_6,
  gif_7,
  gif_8,
  gif_9,
  gif_10,
]

const allGifs: { [key: number]: string } = gifsArray.reduce((acc, curr, i) => {
  const current = { [i]: curr }
  Object.assign(acc, current)
  return acc
}, {})

export { allGifs, gifsArray, R2D2, Fallout }
