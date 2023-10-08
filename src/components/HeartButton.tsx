import EmptyHeart from "@/icons/EmptyHeart"
import FillHeart from "@/icons/FillHeart"
import { usePlayerStore } from "@/store/playerStore"

interface HeartButtonProps {
    className: string
}

const HeartButton: React.FC<HeartButtonProps> = ({ className }) => {
    const isLiked = usePlayerStore(state => state.isLiked)
    const setIsLiked = usePlayerStore(state => state.setIsLiked)
    const handleClick = () => {
        setIsLiked(!isLiked)
    }
    return (
        <>
            <button onClick={handleClick}
                className={` ${isLiked ? 'text-green-500 hover:scale-[1.03]' : 'text-gray-400 hover:text-white hover:scale-[1.03]'}`}>
                {!isLiked ? <EmptyHeart className={className} /> : <FillHeart className={className} />}
            </button>
        </>
    )
}

export default HeartButton