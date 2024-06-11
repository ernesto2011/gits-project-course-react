import { useEffect, useState } from "react";
import { getGifs } from "../helpers/gifsService";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const newData = await getGifs(category);
    setData(newData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {data.map((image) => (
          <GifItem key={image.id} {...image}/>
        ))}
      </div>
    </>
  );
};
