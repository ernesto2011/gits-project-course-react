export const getGifs = async (category)=>{
    const apikey ='W5j5q2JHLREQXMbR4ZaAJ9X5T585pIZ0'
    const URL = `HTTPS://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${category}&limit=10`
    
    const res = await fetch(URL)
    const {data} = await res.json()
    const gifs =data.map(img =>({
        id: img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs
}
