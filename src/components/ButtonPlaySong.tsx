import Play from "@/icons/Play";
import { usePlayerStore } from "@/store/playerStore";

interface ButtonPlaySongProps {
    songId: number
    playlistId: number
    index: number
}

const ButtonPlaySong: React.FC<ButtonPlaySongProps> = ({ songId, playlistId, index }) => {
    const isPlaying = usePlayerStore(state => state.isPlaying)
    const setIsPlaying = usePlayerStore(state => state.setIsPlaying)
    const currentMusic = usePlayerStore(state => state.currentMusic)
    const setCurrentMusic = usePlayerStore(state => state.setCurrentMusic)

    const isPlayingSong = currentMusic?.song?.id === songId && currentMusic.playlist?.id === playlistId.toString()
    const handleClick = () => {
        if (isPlayingSong) {
            setIsPlaying(!isPlaying)
            return
        }

        fetch(`/api/getPlayList?id=${playlistId}`)
            .then(res => res.json())
            .then(data => {
                const { playlist, listOfSongs } = data
                setIsPlaying(true)
                setCurrentMusic({ playlist, listOfSongs, song: listOfSongs[songId - 1] })
            })
    }

    return (
        <>
            <span
                className={`opacity-100 group-hover:opacity-0 ${isPlayingSong && "text-green-400"
                    }`}
            >
                {index}
            </span>
            <div className="absolute top-0 -right-[2px] opacity-0 group-hover:opacity-100">
                <button className='cursor-default'
                    onClick={handleClick}>
                    <Play className="w-6 h-6" />
                </button>
            </div>
        </>
    )
}

export default ButtonPlaySong