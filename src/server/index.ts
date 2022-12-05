import { createServer } from 'http'

import express from 'express'
import next from 'next'
import { Server } from 'socket.io'

import { ClientToServerEvents, ServerToClientEvents } from '@/common/types/socket'

import { createGame } from './games'

const dev = process.env.NODE_ENV !== 'production'

const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()
const port = parseInt(process.env.PORT as string, 10) || 3000

const app = express()

const server = createServer(app)
const io = new Server<ClientToServerEvents, ServerToClientEvents>(server)

nextApp
  .prepare()
  .then(() => {
    app.get('*', (req, res): any => {
      return nextHandler(req, res)
    })
    io.on('connection', socket => {
      socket.on('create-game', (roomName: string) => {
        if (socket.rooms.has(roomName)) {
          return
        }
        socket.join(roomName)
        createGame(roomName).then(game => {
          socket.emit('game-created', game)
        })
      })
    })
    server.listen(port)
  })
  .catch(err => console.error(err))
