async function getGifs(categoria, limite = 4) {
    const q = categoria.replace(' ', '+');
    const limit = limite;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=VwMkESWtMCy6CN2KKMHcFYzhMC5Vxulf&q=${q}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;


    const myHeaders = {
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: myHeaders,
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        const { data } = await response.json();
        const gifs = data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url_img: gif.images.fixed_height_downsampled.url
        }));
        console.log(gifs);
        return gifs;

    } catch (error) {
        console.error('Error al obtener los gifs:', error);
    }
}

export default getGifs;