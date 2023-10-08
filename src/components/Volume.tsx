import { MaxVolume, MidVolume, MinVolume, MuteVolume } from '@/icons/VolumeIcons'
import { usePlayerStore } from '@/store/playerStore'
import { Slider } from './Slider'

const Volume = () => {
    const volume = usePlayerStore(state => state.volume)
    const setVolume = usePlayerStore(state => state.setVolume)

    return (
        <div className='flex justify-center gap-x-2 text-white'>

            {volume <= 0 ? <MuteVolume /> :
                (volume < 0.3 ? <MinVolume /> : (
                    volume < 0.7 ? <MidVolume /> : <MaxVolume />
                ))}
            <Slider
                defaultValue={[100]}
                max={100}
                min={0}
                className='w-[95px]'
                onValueChange={(value) => {
                    const [newVolume] = value
                    const volumeValue = newVolume / 100
                    setVolume(volumeValue)
                }} />
        </div>
    )
}

export default Volume