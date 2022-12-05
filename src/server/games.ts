import { truthEndpoint } from '../common/constans/endpoints'
import client from '../common/lib/axiosClient'
import { Game, GameStatus } from './types/game'

const games: Game[] = []

export function getGame(id: string) {
  return games.find(g => g.id === id)
}

interface GetQuestionResponse {
  question: string
}

export async function createGame(socketId: string): Promise<Game> {
  //   if (!getGame(socketId)) {
  //     throw new Error('Game already exists')
  //   }

  const res = await client.get<GetQuestionResponse>(truthEndpoint)
  const question = res.data.question

  const isTruth = Math.random() < 0.5

  const game: Game = {
    id: socketId,
    question: question,
    isTruth: isTruth,
    player1: {
      id: socketId,
      score: 0,
    },
    player2: undefined,
    status: GameStatus.Waiting,
  }

  games.push(game)

  return game
}
