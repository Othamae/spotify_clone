import EmptyHeart from "@/icons/EmptyHeart"
import FillHeart from "@/icons/FillHeart"


const HeartButton = () => {
    const liked = false
    return (
        <>
            {
                !liked
                    ?
                    (
                        <button className="text-gray-400 hover:text-white hover:scale-[1.03]">
                            <EmptyHeart />
                        </button>
                    )
                    :
                    (
                        <button className="text-green-500 hover:scale-[1.03]">
                            <FillHeart />
                        </button>
                    )
            }
        </>
    )
}

export default HeartButton