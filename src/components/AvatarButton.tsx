import type { Image } from "@/types/types"

interface AvatarButtonProps {
    image: Image
}


const AvatarButton: React.FC<AvatarButtonProps> = ({ image }) => {
    const { url } = image
    const handleClick = () => {
        document.cookie = 'access_token=; Max-Age=-1; path=/;'
        document.cookie = 'refresh_token=; Max-Age=-1; path=/;'
        window.location.href = "/"
    }

    return (
        <button onClick={handleClick} className="mr-8">
            <img
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={url}
                alt="Bordered avatar"
            />
        </button>
    )
}

export default AvatarButton