
interface LoginButtonProps {

}

const LoginButton: React.FC<LoginButtonProps> = ({ }) => {
    const handleClick = async () => {
        console.log('dentro de handleClick')
        try {
            const response = await fetch('/api/redirect', {
                method: 'GET'
            })
            const data = await response.json()
            window.location.replace(data)

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2"
                onClick={handleClick}>Login
            </button>
        </div>

    )
}

export default LoginButton