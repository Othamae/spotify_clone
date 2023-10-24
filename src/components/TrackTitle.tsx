import { usePlayerTrackStore } from '@/store/playerTracksStore'
import type { Track } from '@/types/types'
import { useEffect, useState } from 'react'
interface TrackTitleProps {
    track: Track
}

const TrackTitle: React.FC<TrackTitleProps> = ({ track }) => {
    const currentMusic = usePlayerTrackStore(state => state.currentSpotyMusic)
    const [isPlayingSong, setIsPlayingSong] = useState(currentMusic?.track?.id === track.id)

    useEffect(() => {
        setIsPlayingSong(currentMusic?.track?.id === track.id)
    }, [currentMusic])

    const listOfArtist = track.artists
    const artists: String[] = []
    listOfArtist.map((artist) => {
        artists.push(artist.name)
    })


    return (
        <>
            <h3 className={`text-base ${isPlayingSong ? "text-green-400" : " text-white"} font-normal`}
            >
                {track.name}
            </h3>
            <span className="text-sm">{artists.join(', ')}</span>
        </>
    )
}

export default TrackTitle