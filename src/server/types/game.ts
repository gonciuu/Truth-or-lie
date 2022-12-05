import Player from './player'

export enum GameStatus {
  Waiting = 'waiting',
  Playing = 'playing',
  Finished = 'finished',
}

export interface Game {
  id: string
  question: string
  isTruth: boolean
  player1: Player
  player2: Player | undefined
  status: GameStatus
}
