import React from 'react'

import Button from '@/common/components/Button'
import Modal from '@/common/components/Modal'

export default function Header() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="">
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold text-center">Truth or Lie game</h1>
        <p className="text-2xl text-center mt-4">
          Multiplayer game where you have to guess if the statement is true or a lie.
        </p>
        <div className="flex justify-center mt-8 space-x-4">
          <Button>Create Game</Button>
          <Button variant="outlined" onClick={() => setOpen(true)}>
            Join Game
          </Button>
          <Modal open={open} onClose={() => setOpen(false)}>
            essasdit byku
          </Modal>
        </div>
      </div>
    </div>
  )
}
