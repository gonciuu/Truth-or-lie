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
        <div className="flex items-center justify-center space-x-6 mt-8">
          <Button size="lg" className="w-44">
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
