import { io, Socket } from 'socket.io-client'

import { ClientToServerEvents, ServerToClientEvents } from '@/common/types/socket'

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io()
