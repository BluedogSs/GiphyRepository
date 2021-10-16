import {API_KEY, API_URL} from '../services/settings'


export default function getTrendingTerms () {
    const apiURL = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=25&rating=r`
    
    return fetch(apiURL)
      .then(res => res.json())
      .then( response => {
        console.log("response")
        const {data = []} = response
        if (Array.isArray(data)) {
            const gifs = data.map(image => {
                const {images, title, id} = image
                const { url } = images.downsized_medium
                return { title, id, url }   
            })
            return gifs
        }
      })
}
