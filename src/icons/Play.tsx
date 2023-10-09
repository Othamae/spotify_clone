interface PlayProps {
    className?: string
}
const Play: React.FC<PlayProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor"
    ><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path></svg>
)

export default Play