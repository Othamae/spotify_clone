import PauseIcon from "@/icons/Pause.tsx"
import PlayIcon from "@/icons/Play.tsx"
import { usePlayerStore } from "@/store/playerStore"

interface PlayButtonPlaylistProps {
    className?: string
    id: string

}

const PlayButtonPlaylist: React.FC<PlayButtonPlaylistProps> = ({ className, id }) => {
    const isPlaying = usePlayerStore(state => state.isPlaying)
    const setIsPlaying = usePlayerStore(state => state.setIsPlaying)
    const currentMusic = usePlayerStore(state => state.currentMusic)
    const setCurrentMusic = usePlayerStore(state => state.setCurrentMusic)

    const isPlayingPlaylist = isPlaying && currentMusic.playlist?.id === id

    const handleClick = () => {
        if (isPlayingPlaylist) {
            setIsPlaying(!isPlaying)
            return
        }

        fetch(`/api/getPlayList?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const { playlist, listOfSongs, firstSongId } = data
                setIsPlaying(true)
                setCurrentMusic({ ...currentMusic, playlist, listOfSongs, song: listOfSongs[firstSongId - 1] })
            })
    }

    return (
        <button
            onClick={handleClick}
            className={`text-black bg-green-500 rounded-full p-2 mr-4 shadow-lg shadow-gray-900 ${className}`}
        >
            {isPlayingPlaylist ? <PauseIcon /> : <PlayIcon className="w-8 h-8" />}

        </button>
    )
}

export default PlayButtonPlaylist