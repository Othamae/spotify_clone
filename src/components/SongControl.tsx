import { PlayerBack, PlayerNext, PlayerPause, PlayerPlay } from '@/icons/PlayerIcons'
import { usePlayerStore } from '@/store/playerStore'
import { useEffect, useRef } from 'react'
import SongDuration from './SongDuration'

const SongControl = () => {
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


    const handlePreviousSong = () => {
        const nextSong = currentMusic.song
        if (nextSong) {
            const index = currentMusic.listOfSongs.indexOf(nextSong)
            const previousSong = currentMusic.listOfSongs[index - 1]
            previousSong && setCurrentMusic({ ...currentMusic, song: previousSong })
        }
    }

    const handleNextSong = () => {
        const previousSong = currentMusic.song
        if (previousSong) {
            const index = currentMusic.listOfSongs.indexOf(previousSong)
            const nextSong = currentMusic.listOfSongs[index + 1]
            nextSong && setCurrentMusic({ ...currentMusic, song: nextSong })
        }
    }
    return (
        <div className='flex justify-center flex-col items-center pt-1'>
            <div className='flex flex-row gap-5 items-center'>
                <button onClick={handlePreviousSong}
                    className='text-white p-1 opacity-60 hover:opacity-100'>
                    <PlayerBack />
                </button>
                <button onClick={handleClick}
                    className='bg-white rounded-full p-1 text-black'>
                    {isPlaying ? <PlayerPause /> : <PlayerPlay />}
                </button>
                <button onClick={handleNextSong}
                    className='p-1 text-white opacity-60 hover:opacity-100'>
                    <PlayerNext />
                </button>
            </div>

            <SongDuration audio={audioRef} />
            <audio ref={audioRef} />
        </div>
    )
}

export default SongControl