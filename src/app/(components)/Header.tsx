'use client'
import React, { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import Button from '@/common/components/Button'
import Modal from '@/common/components/Modal'
import { socket } from '@/common/lib/socketClient'
import { Game } from 'src/server/types/game'

export default function Header() {
  const [open, setOpen] = React.useState(false)

  const router = useRouter()

  //generate random id
  const id = Math.random().toString(36).substring(7)

  const createGame = () => {
    socket.emit('create-game', id)
  }

  useEffect(() => {
    socket.on('game-created', (game: Game) => {
      router.push(`/game/${game.id}`)
    })

    return () => {
      socket.off('game-created')
    }
  }, [router])

  return (
    <div className="">
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold text-center">Truth or Lie game</h1>
        <p className="text-2xl text-center mt-4">
          Multiplayer game where you have to guess if the statement is true or a lie.
        </p>
        <div className="flex items-center justify-center space-x-6 mt-8">
          <Button size="lg" className="w-44" onClick={createGame}>
            Create Game
          </Button>
          <Button variant="outlined" onClick={() => setOpen(true)} size="lg" className="w-44">
            Join Game
          </Button>
        </div>

        <Modal open={open} onClose={() => setOpen(false)}>
          essasdit byku
        </Modal>
      </div>
    </div>
  )
}
