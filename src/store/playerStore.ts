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
    currentMusic: CurrentMusicType
    setIsPlaying: (isPlaying: boolean) => void
    setIsLiked: (isLiked: boolean) => void
    setCurrentMusic: (currentMusic: CurrentMusicType) => void
}


export const usePlayerStore = create<PlayerStoreStateType>((set) => ({
    isPlaying: false,
    isLiked: false,
    currentMusic: { playlist: null, song: null, listOfSongs: [] },
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    setIsLiked: (isLiked: boolean) => set({ isLiked }),
    setCurrentMusic: (currentMusic: CurrentMusicType) => set({ currentMusic })
}))
