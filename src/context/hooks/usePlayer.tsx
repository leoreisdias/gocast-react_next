import { useContext } from 'react'
import { PlayerContext } from '../PlayerContext'

export const usePlayer = () => {
  return useContext(PlayerContext)
}
