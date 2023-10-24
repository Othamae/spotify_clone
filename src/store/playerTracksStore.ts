import type { PlaylistType, Track } from '@/types/types'
import { create } from 'zustand'

interface CurrentMusicPlayerType {
    playlist: PlaylistType | null
    track: Track | null
    listOfTracks: Track[]
    likePlaylist: boolean
}

export interface PlayerTrackStoreStateType {
    isPlaying: boolean
    LikePlaylists: PlaylistType[]
    LikeTracks: Track[]
    volume: number
    currentSpotyMusic: CurrentMusicPlayerType
    setIsPlaying: (isPlaying: boolean) => void
    setLikePlaylists: (LikePlaylists: PlaylistType[]) => void
    setLikeTracks: (LikeTracks: Track[]) => void
    setVolume: (volume: number) => void
    setCurrentSpotyMusic: (currentSpotyMusic: CurrentMusicPlayerType) => void
}


export const usePlayerTrackStore = create<PlayerTrackStoreStateType>((set) => ({
    isPlaying: false,
    LikePlaylists: [],
    LikeTracks: [],
    volume: 1,
    currentSpotyMusic: { playlist: null, track: null, listOfTracks: [], likePlaylist: false },
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    setLikePlaylists: (LikePlaylists: PlaylistType[]) => set({ LikePlaylists }),
    setLikeTracks: (LikeTracks: Track[]) => set({ LikeTracks }),
    setVolume: (volume: number) => set({ volume }),
    setCurrentSpotyMusic: (currentSpotyMusic: CurrentMusicPlayerType) => set({ currentSpotyMusic })
}))
