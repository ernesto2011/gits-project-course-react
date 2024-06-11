import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const GifsApp = () => {
  const [categories, setCategories] = useState([''])
  
  const addCategory = (newCategory)=>{
    if(categories.includes(newCategory)) return;
    setCategories([...categories, newCategory])
  }
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={addCategory}/>

          {
            categories.map((category) =>(
              <GifGrid  key={category} category={category}/>
            ))
          }
       
    </>
  )
}
