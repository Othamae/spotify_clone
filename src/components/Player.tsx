import CurrentSong from './CurrentSong'
import SongControl from './SongControl'
import Volume from './Volume'

export function Player() {
    return (
        <div className='flex flex-row justify-between w-full px-4 z-50'>
            <div className='flex items-center align-middle'>
                <CurrentSong />
            </div>
            <div className='grid place-content-center gap-4 flex-1'>
                <SongControl />
            </div>
            <div className='grid place-content-center'>
                <Volume />
            </div>
        </div>
    )
}
