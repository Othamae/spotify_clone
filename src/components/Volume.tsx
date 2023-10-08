import { MaxVolume, MidVolume, MinVolume, MuteVolume } from '@/icons/VolumeIcons'
import { usePlayerStore } from '@/store/playerStore'
import { Slider } from './Slider'
import { useRef } from 'react'

const Volume = () => {
    const volume = usePlayerStore(state => state.volume)
    const setVolume = usePlayerStore(state => state.setVolume)
    const previousVolume = useRef(volume)

    const isVolumeSilence = volume === 0

    const handleClick = () => {
        isVolumeSilence ? setVolume(previousVolume.current) : (
            previousVolume.current = volume,
            setVolume(0)
        )

    }

    return (
        <div className='flex justify-center gap-x-2 text-white'>
            <button onClick={handleClick} className="opacity-70 hover:opacity-100">
                {volume <= 0 ? <MuteVolume /> :
                    (volume < 0.3 ? <MinVolume /> : (
                        volume < 0.7 ? <MidVolume /> : <MaxVolume />
                    ))}
            </button>

            <Slider
                defaultValue={[100]}
                max={100}
                min={0}
                className='w-[95px]'
                value={[volume * 100]}
                onValueChange={(value) => {
                    const [newVolume] = value
                    const volumeValue = newVolume / 100
                    setVolume(volumeValue)
                }} />
        </div>
    )
}

export default Volume