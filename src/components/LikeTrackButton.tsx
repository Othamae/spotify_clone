import EmptyHeart from "@/icons/EmptyHeart"
import FillHeart from "@/icons/FillHeart"
import { usePlayerTrackStore } from "@/store/playerTracksStore"
import type { Track } from "@/types/types"
import { useEffect, useState } from "react"

interface LikeTrackButtonProps {
    className: string
    track: Track
    hidden?: boolean
}

const LikeTrackButton: React.FC<LikeTrackButtonProps> = ({ className, track, hidden }) => {
    const currentMusic = usePlayerTrackStore(state => state.currentSpotyMusic)
    const likeTracks = usePlayerTrackStore(state => state.LikeTracks)
    const setLikeTracks = usePlayerTrackStore(state => state.setLikeTracks)
    const isthere = likeTracks.find(trackFromList => trackFromList.id === currentMusic.track?.id) !== undefined
    const [isLikedTrack, setIsLikedTrack] = useState(isthere)


    useEffect(() => {
        const trackIsLiked = likeTracks.find(trackFromList => trackFromList.id === track.id) !== undefined
        setIsLikedTrack(trackIsLiked)
    }, [currentMusic.playlist, likeTracks, track])



    const handleClick = () => {
        if (isLikedTrack) {
            const newLikeTrackList = likeTracks.filter(trackFromList => (trackFromList.id !== track.id))
            setLikeTracks(newLikeTrackList)
            setIsLikedTrack(false)
            return
        }

        const currentTrack = track
        if (currentTrack) {
            const newLikeTrack = [...likeTracks, track]
            setLikeTracks(newLikeTrack)
            setIsLikedTrack(true)
            return
        }
    }
    return (
        <>
            <div className="">
                <button onClick={handleClick}
                    className={` ${isLikedTrack ? 'text-green-500 hover:scale-[1.03] !opacity-100' : hidden ? 'text-gray-400 hover:text-white hover:scale-[1.03] opacity-0 group-hover:opacity-100' : 'text-gray-400 hover:text-white hover:scale-[1.03]'} `}>
                    {!isLikedTrack ? <EmptyHeart className={className} /> : <FillHeart className={className} />}
                </button>
            </div>

        </>
    )
}

export default LikeTrackButton