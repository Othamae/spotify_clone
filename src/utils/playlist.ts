import type { PlaylistType } from "@/types/types"


export const getPlaylist = async (token: string, playlistId: string): Promise<PlaylistType> => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        console.log(response)
        return await response.json() as PlaylistType
    } catch (error) {
        console.log(error)
        throw error
    }

}


export const getDuration = (duration: number): string => {
    const seconds = Math.floor(duration / 1000)
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    if (hours === 0) {
        return `${minutes}min ${remainingSeconds}s`
    } else {
        return `${hours}h ${minutes}min`
    }
}

export const getTrackDuration = (duration: number): string => {
    if (duration === 0) return '--:--'
    const seconds = Math.floor(duration / 1000)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

export const changeDateFormat = (dateToFormat: string) => {
    const date = new Date(dateToFormat)
    const day = date.getUTCDate()
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getUTCFullYear()

    return `${day} ${month} ${year}`
}
