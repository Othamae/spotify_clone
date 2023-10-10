import { usePlayerStore } from "@/store/playerStore"
import LikeSongButton from "./LikeSongButton"

const CurrentSong = () => {
    const currentMusic = usePlayerStore(state => state.currentMusic)
    return (
        <div className="flex flex-row items-center gap-4 align-middle relative overflow-hidden">
            <picture className="aspect-square h-14 w-14 flex-none ">
                <img src={currentMusic?.song?.image} alt={currentMusic?.song?.title} className="rounded-[4px] bg-cover" />
            </picture>
            <div className="flex flex-col">
                <h4 className="font-semibold">{currentMusic?.song?.title}</h4>
                <span className="text-xs text-gray-400">{currentMusic?.song?.artists.join(', ')}</span>
            </div>
            <div className="">
                {
                    currentMusic?.song && <LikeSongButton song={currentMusic?.song} className="w-4 h-4 " />
                }
            </div>
        </div>
    )
}

export default CurrentSong