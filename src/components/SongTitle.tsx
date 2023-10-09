import type { Song } from '@/lib/data'
import { usePlayerStore } from '@/store/playerStore'
import { useEffect, useState } from 'react'
interface SongTitleProps {
    song: Song
}

const SongTitle: React.FC<SongTitleProps> = ({ song }) => {
    const currentMusic = usePlayerStore(state => state.currentMusic)
    const [isPlayingSong, setIsPlayingSong] = useState(currentMusic?.song?.id === song.id)

    useEffect(() => {
        setIsPlayingSong(currentMusic?.song?.id === song.id && currentMusic.playlist?.id === song.albumId.toString())
    }, [currentMusic])

    return (
        <>
            <h3
                className={`text-base ${isPlayingSong ? "text-green-400" : " text-white"
                    } font-normal`}
            >
                {song.title}
            </h3>
            <span className="text-sm">{song.artists.join(', ')}</span>
        </>
    )
}

export default SongTitle