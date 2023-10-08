import HeartButton from "./HeartButton"

interface CurrentSongProps {
    image?: string
    artist?: string
    title?: string
}

const CurrentSong: React.FC<CurrentSongProps> = ({ image, artist, title }) => {
    return (
        <div className="flex flex-row items-center gap-4 align-middle relative overflow-hidden">
            <picture className="aspect-square h-14 w-14 flex-none ">
                <img src={image} alt={title} className="rounded-[4px] bg-cover" />
            </picture>
            <div className="flex flex-col">
                <h4 className="font-semibold">{title}</h4>
                <span className="text-xs text-gray-400">{artist}</span>
            </div>
            <div className="">
                <HeartButton className="w-4 h-4" />
            </div>
        </div>
    )
}

export default CurrentSong