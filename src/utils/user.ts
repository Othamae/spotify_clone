import type { UserPlaylistsType, UserResponseType } from "@/types/types"


export const getUser = async (token: string): Promise<UserResponseType> => {
    try {
        const response = await fetch("https://api.spotify.com/v1/me", {
            method: "GET",
            headers: {

                "Authorization": `Bearer ${token}`,
            }
        })
        return await response.json() as UserResponseType
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getUserPlaylists = async (token: string): Promise<UserPlaylistsType> => {
    try {
        const response = await fetch("https://api.spotify.com/v1/me/playlists", {
            method: "GET",
            headers: {

                "Authorization": `Bearer ${token}`,
            }
        })
        return await response.json() as UserPlaylistsType
    } catch (error) {
        console.log(error)
        throw error
    }

}