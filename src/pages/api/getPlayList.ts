import { allPlaylists, songs } from "@/lib/data"

export async function GET(request: Request) {
    const { url } = request
    const id = new URL(url).searchParams.get('id')

    const playlist = allPlaylists.find(playlist => playlist.id === id)
    const listOfSongs = songs.filter(song => song.albumId === playlist?.albumId)

    return new Response(JSON.stringify({ playlist, listOfSongs }))
}
