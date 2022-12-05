import { Game } from 'src/server/types/game'

export interface ServerToClientEvents {
  'game-created': (game: Game) => void
}

export interface ClientToServerEvents {
  'create-game': (roomName: string) => void
}
