import EmptyHeart from "@/icons/EmptyHeart"
import FillHeart from "@/icons/FillHeart"
import { usePlayerStore } from "@/store/playerStore"

const HeartButton = () => {
    const isLiked = usePlayerStore(state => state.isLiked)
    const setIsLiked = usePlayerStore(state => state.setIsLiked)
    const handleClick = () => {
        setIsLiked(!isLiked)
    }
    return (
        <>
            <button onClick={handleClick}
                className={` ${isLiked ? 'text-green-500 hover:scale-[1.03]' : 'text-gray-400 hover:text-white hover:scale-[1.03]'}`}>
                {!isLiked ? <EmptyHeart /> : <FillHeart />}
            </button>
        </>
    )
}

export default HeartButton