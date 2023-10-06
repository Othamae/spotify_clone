import PlayIcon from "@/icons/Play.tsx"
//import PauseIcon from "@/icons/Pause.tsx"

interface PlayButtonPlaylistProps {
    className?: string

}

const PlayButtonPlaylist: React.FC<PlayButtonPlaylistProps> = ({ className }) => {
    return (
        <button
            className={`text-black bg-green-500 rounded-full p-2 mr-4 shadow-lg shadow-gray-900 ${className}`}
        >
            <PlayIcon />
        </button>
    )
}

export default PlayButtonPlaylist