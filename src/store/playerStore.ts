import type { Playlist, Song } from '@/lib/data'
import { create } from 'zustand'

interface CurrentTrackType {
    playlist: Playlist | null
    song: Song | null
    listOfSongs: Song[]
}

export interface PlayerStoreStateType {
    isPlaying: boolean;
    currentTrack: CurrentTrackType;
    setIsPlaying: (isPlaying: boolean) => void;
    setCurrentTrack: (currentTrack: CurrentTrackType) => void;
}


export const usePlayerStore = create<PlayerStoreStateType>((set) => ({
    isPlaying: false,
    currentTrack: { playlist: null, song: null, listOfSongs: [] },
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    setCurrentTrack: (currentTrack: CurrentTrackType) => set({ currentTrack })
}))
