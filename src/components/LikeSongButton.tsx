import EmptyHeart from "@/icons/EmptyHeart"
import FillHeart from "@/icons/FillHeart"
import { type Song } from "@/lib/data"
import { usePlayerStore } from "@/store/playerStore"
import { useEffect, useState } from "react"

interface LikeSongButtonProps {
    className: string
    song: Song
    hidden?: boolean
}

const LikeSongButton: React.FC<LikeSongButtonProps> = ({ className, song, hidden }) => {
    const currentMusic = usePlayerStore(state => state.currentMusic)
    const likeSongs = usePlayerStore(state => state.LikeSongs)
    const setLikeSongs = usePlayerStore(state => state.setLikeSongs)
    const isthere = likeSongs.find(songFromList => songFromList.id === currentMusic.song?.id && songFromList.albumId === currentMusic.playlist?.albumId) !== undefined
    const [isLikedSong, setIsLikedSong] = useState(isthere)


    useEffect(() => {
        const songIsLiked = likeSongs.find(songFromList => songFromList.id === song.id && songFromList.albumId === song.albumId) !== undefined
        setIsLikedSong(songIsLiked)
    }, [currentMusic.playlist, likeSongs, song])



    const handleClick = () => {
        if (isLikedSong) {
            const newLikeSongList = likeSongs.filter(songFromList => (songFromList.id !== song.id || songFromList.albumId !== song.albumId))
            setLikeSongs(newLikeSongList)
            setIsLikedSong(false)
            return
        }

        const currentSong = song
        if (currentSong) {
            const newLikeSong = [...likeSongs, song]
            setLikeSongs(newLikeSong)
            setIsLikedSong(true)
            return
        }
    }
    return (
        <>
            <div className="">
                <button onClick={handleClick}
                    className={` ${isLikedSong ? 'text-green-500 hover:scale-[1.03] !opacity-100' : hidden ? 'text-gray-400 hover:text-white hover:scale-[1.03] opacity-0 group-hover:opacity-100' : 'text-gray-400 hover:text-white hover:scale-[1.03]'} `}>
                    {!isLikedSong ? <EmptyHeart className={className} /> : <FillHeart className={className} />}
                </button>
            </div>

        </>
    )
}

export default LikeSongButton