import { useEffect, useState } from "react"
import { Slider } from "./Slider"
interface SongControlProps {
    audio: React.MutableRefObject<HTMLAudioElement | null>
}

const SongControl: React.FC<SongControlProps> = ({ audio }) => {
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        audio.current?.addEventListener('timeupdate', handleTimeUpdate)
        return () => {
            audio.current?.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [])

    const handleTimeUpdate = () => {
        setCurrentTime(audio.current?.currentTime || 0)
    }

    const formatTime = (time: number) => {
        if (time === 0) return '--:--'
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }
    const duration = audio.current?.duration || 0

    return (
        <div className="flex flex-row gap-2 text-xs py-2">
            <span className="opacity-60 w-12 text-right">{formatTime(currentTime)}</span>
            <Slider
                defaultValue={[0]}
                max={audio?.current?.duration ?? 0}
                min={0}
                className='w-[500px]'
                value={[currentTime]}
                onValueChange={(value) => {
                    audio.current && (audio.current.currentTime = value[0])
                }}
            />
            <span className="opacity-60 w-12">{formatTime(duration)}</span>

        </div>
    )
}

export default SongControl