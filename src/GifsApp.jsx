import { useState } from "react"
import { AddCategory } from "./AddCategory"


export const GifsApp = () => {
  const [categories, setCategories] = useState(['One Punch Man', 'Dragon Ball'])
  
  const addCategory = ()=>{
    setCategories(categories)
  }
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories}/>
{/*         
          <button onClick={addCategory}>agregar</button> */}
      
        <ol>
          {
            categories.map(category =>{
              return <li key={category}>{category}</li>
            })
          }
        </ol>
    </>
  )
}
