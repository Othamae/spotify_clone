import type { Playlist, Song } from '@/lib/data'
import { create } from 'zustand'

interface CurrentMusicType {
    playlist: Playlist | null
    song: Song | null
    listOfSongs: Song[]
    likePlaylist: boolean
}

export interface PlayerStoreStateType {
    isPlaying: boolean
    LikePlaylists: Playlist[]
    LikeSongs: Song[]
    volume: number
    currentMusic: CurrentMusicType
    setIsPlaying: (isPlaying: boolean) => void
    setLikePlaylists: (LikePlaylists: Playlist[]) => void
    setLikeSongs: (LikeSongs: Song[]) => void
    setVolume: (volume: number) => void
    setCurrentMusic: (currentMusic: CurrentMusicType) => void
}


export const usePlayerStore = create<PlayerStoreStateType>((set) => ({
    isPlaying: false,
    LikePlaylists: [],
    LikeSongs: [],
    volume: 1,
    currentMusic: { playlist: null, song: null, listOfSongs: [], likePlaylist: false },
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    setLikePlaylists: (LikePlaylists: Playlist[]) => set({ LikePlaylists }),
    setLikeSongs: (LikeSongs: Song[]) => set({ LikeSongs }),
    setVolume: (volume: number) => set({ volume }),
    setCurrentMusic: (currentMusic: CurrentMusicType) => set({ currentMusic })
}))
