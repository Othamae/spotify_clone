import PauseIcon from '@/icons/PlayerPause'
import PlayIcon from '@/icons/PlayerPlay'
import { usePlayerStore } from '@/store/playerStore'
import { useEffect, useRef } from 'react'
import CurrentSong from './CurrentSong'
import Volume from './Volume'

export function Player() {
    const isPlaying = usePlayerStore(state => state.isPlaying)
    const setIsPlaying = usePlayerStore(state => state.setIsPlaying)
    const currentMusic = usePlayerStore(state => state.currentMusic)
    const setCurrentMusic = usePlayerStore(state => state.setCurrentMusic)
    const volume = usePlayerStore(state => state.volume)
    const setVolume = usePlayerStore(state => state.setVolume)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        audioRef.current && (
            isPlaying
                ? audioRef.current.play()
                : audioRef.current.pause()
        )
    }, [isPlaying])

    useEffect(() => {
        audioRef.current && (audioRef.current.volume = volume)
    }, [volume])


    useEffect(() => {
        const { song, playlist } = currentMusic
        if (song) {
            const src = `/music/${playlist?.id}/0${song.id}.mp3`
            audioRef.current && (
                audioRef.current.src = src,
                audioRef.current.volume = volume,
                audioRef.current.play()
            )
        }

    }, [currentMusic])


    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }


    return (
        <div className='flex flex-row justify-between w-full px-4 z-50'>
            <div className='flex items-center align-middle'>
                <CurrentSong image={currentMusic.song?.image} title={currentMusic.song?.title} artist={currentMusic.song?.artists.join(',')} />
            </div>
            <div className='grid place-content-center gap-4 flex-1'>
                <div className='flex justify-center'>
                    <button onClick={handleClick}
                        className='bg-white rounded-full p-1 text-black'>
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                    <audio ref={audioRef} />
                </div>
            </div>
            <div className='grid place-content-center'>
                <Volume />
            </div>


        </div>
    )
}
