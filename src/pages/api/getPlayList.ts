import { allPlaylists, songs } from "@/lib/data"

export async function GET(params: string, request: Request) {
    const { url } = request
    const id = new URL(url).searchParams.get('id')

    const playlist = allPlaylists.find((playlist) => playlist.id === id)
    const listOfSongs = songs.filter(song => song.albumId === playlist?.albumId)
    const firstSongId = listOfSongs[0].id

    return new Response(JSON.stringify({ playlist, listOfSongs, firstSongId }), {
        headers: { "content-type": "application/json" },
    })
}
