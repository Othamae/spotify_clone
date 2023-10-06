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

    const handleClick = () => {
        setIsPlaying(!isPlaying)

    }
    return (
        <button
            onClick={handleClick}
            className={`text-black bg-green-500 rounded-full p-2 mr-4 shadow-lg shadow-gray-900 ${className}`}
        >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}

        </button>
    )
}

export default PlayButtonPlaylist