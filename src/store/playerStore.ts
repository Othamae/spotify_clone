import type { Playlist, Song } from '@/lib/data'
import { create } from 'zustand'

interface currentTrackType {
    playlist: Playlist
    song: Song
    listOfSongs: Song[]
}

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentTrack: { playlist: null, song: null, listOfSongs: [] },
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    setCurrentTrack: (currentTrack: currentTrackType) => set({ currentTrack })
}))
