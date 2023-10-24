import EmptyHeart from "@/icons/EmptyHeart"
import FillHeart from "@/icons/FillHeart"
import { usePlayerTrackStore } from "@/store/playerTracksStore"
import { useEffect, useState } from "react"

interface LikeUserPlaylistButtonProps {
    className: string
    playListId: string
}

const LikeUserPlaylistButton: React.FC<LikeUserPlaylistButtonProps> = ({ className, playListId }) => {
    const currentMusic = usePlayerTrackStore(state => state.currentSpotyMusic)
    const likePlaylists = usePlayerTrackStore(state => state.LikePlaylists)
    const setLikePlayLists = usePlayerTrackStore(state => state.setLikePlaylists)
    const [isLikedPlaylist, setIsLikedPlaylist] = useState(likePlaylists.find(playlist => playlist === currentMusic.playlist?.id) === undefined ? false : true)

    useEffect(() => {
        const playlistIsLiked = likePlaylists.find(playlist => playlist === playListId) !== undefined
        setIsLikedPlaylist(playlistIsLiked)

    }, [playListId, currentMusic, likePlaylists])


    const handleClick = () => {
        if (isLikedPlaylist) {
            const newLikePlayList = likePlaylists.filter(playlist => playlist !== playListId)
            setLikePlayLists(newLikePlayList)
            setIsLikedPlaylist(false)
            return
        }

        const newLikePlayList = [...likePlaylists, playListId]
        setLikePlayLists(newLikePlayList)
        setIsLikedPlaylist(true)




    }
    return (
        <>
            <button onClick={handleClick}
                className={` ${isLikedPlaylist ? 'text-green-500 hover:scale-[1.03]' : 'text-gray-400 hover:text-white hover:scale-[1.03]'}`}>
                {!isLikedPlaylist ? <EmptyHeart className={className} /> : <FillHeart className={className} />}
            </button>
        </>
    )
}

export default LikeUserPlaylistButton