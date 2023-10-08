import type { Playlist, Song } from '@/lib/data'
import { create } from 'zustand'

interface CurrentMusicType {
    playlist: Playlist | null
    song: Song | null
    listOfSongs: Song[]
}

export interface PlayerStoreStateType {
    isPlaying: boolean
    isLiked: boolean
    volume: number
    currentMusic: CurrentMusicType
    setIsPlaying: (isPlaying: boolean) => void
    setIsLiked: (isLiked: boolean) => void
    setVolume: (volume: number) => void
    setCurrentMusic: (currentMusic: CurrentMusicType) => void
}


export const usePlayerStore = create<PlayerStoreStateType>((set) => ({
    isPlaying: false,
    isLiked: false,
    volume: 1,
    currentMusic: { playlist: null, song: null, listOfSongs: [] },
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    setIsLiked: (isLiked: boolean) => set({ isLiked }),
    setVolume: (volume: number) => set({ volume }),
    setCurrentMusic: (currentMusic: CurrentMusicType) => set({ currentMusic })
}))
