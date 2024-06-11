import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifsApp = () => {
  const [categories, setCategories] = useState([''])
  
  const addCategory = (newCategory)=>{
    if(categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories])
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
