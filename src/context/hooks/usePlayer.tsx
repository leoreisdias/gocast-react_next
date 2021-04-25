import { useContext } from 'react'
import { PlayerContext } from '../PlayerContext'

export const usePlayer = () => {
  const context = useContext(PlayerContext)

  return context
}
