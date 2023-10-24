const REDIRECT_URI = import.meta.env.REDIRECT_URI
const CLIENT_ID = import.meta.env.CLIENT_ID
const CLIENT_SECRET = import.meta.env.CLIENT_SECRET


export const spotyfyAuthCall = async (code: string) => {
    try {
        const searchParams = new URLSearchParams({
            code: code,
            grant_type: "authorization_code",
            redirect_uri: REDIRECT_URI,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        })
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: searchParams,
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
};

export const getRefreshedAccesToken = () => {

    var refresh_token = window.localStorage.getItem("refresh_token") || ''

    const url = 'https://accounts.spotify.com/api/token'
    const params = new URLSearchParams()
    params.append('grant_type', 'refresh_token')
    params.append('refresh_token', refresh_token)

    const headers = {
        'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: params
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.access_token)
            return data.access_token
        })
        .catch(error => {
            console.error('Error:', error)
        })
}

