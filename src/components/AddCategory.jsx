import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  };
  const OnSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length<=1) return;
    setInputValue('')
    onNewCategory(inputValue.trim())
    
}
  return (
    <form action="" onSubmit={OnSubmit}>
      <input 
      type="text" 
      placeholder="Buscar gifs"
      value={inputValue} 
      onChange={onInputChange} />
    </form>
  );
};
