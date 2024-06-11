import { useEffect, useState } from "react";
import { getGifs } from "../helpers/gifsService";

export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getData = async () => {
      const newData = await getGifs(category);
      setImages(newData);
      setisLoading(false)
    };
    useEffect(() => {
      getData();
    }, []);
    return{
        images,
        isLoading
    }
}

