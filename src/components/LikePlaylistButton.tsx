import EmptyHeart from "@/icons/EmptyHeart"
import FillHeart from "@/icons/FillHeart"
import { playlists, type Playlist } from "@/lib/data"
import { usePlayerStore } from "@/store/playerStore"
import { useEffect, useState } from "react"

interface LikePlaylistButtonProps {
    className: string
    playList?: Playlist
}

const LikePlaylistButton: React.FC<LikePlaylistButtonProps> = ({ className, playList }) => {
    const currentMusic = usePlayerStore(state => state.currentMusic)
    const likePlaylists = usePlayerStore(state => state.LikePlaylists)
    const setLikePlayLists = usePlayerStore(state => state.setLikePlaylists)
    const [isLikedPlaylist, setIsLikedPlaylist] = useState(likePlaylists.find(playlist => playlist.albumId === currentMusic.playlist?.albumId) === undefined ? false : true)

    useEffect(() => {
        const playlistIsLiked = likePlaylists.find(playlist => playlist.albumId === playList?.albumId) !== undefined
        setIsLikedPlaylist(playlistIsLiked)

    }, [playList, currentMusic, likePlaylists]);


    const handleClick = () => {
        if (isLikedPlaylist) {
            const newLikePlayList = likePlaylists.filter(playlist => playlist.albumId !== playList?.albumId)
            setLikePlayLists(newLikePlayList)
            setIsLikedPlaylist(false)
            return
        }

        const currentPlayList = playlists.find(playlist => playlist.albumId === playList?.albumId)
        if (currentPlayList) {
            const newLikePlayList = [...likePlaylists, currentPlayList]
            setLikePlayLists(newLikePlayList)
            setIsLikedPlaylist(true)
        }



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

export default LikePlaylistButton