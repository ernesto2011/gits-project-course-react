import { useState } from "react";

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const OnSubmit = (e) => {
    e.preventDefault()
    if(inputValue.trim().length<=1) return;
    setCategories(categories =>[...categories,inputValue]);
}
  return (
    <form action="" onSubmit={OnSubmit}>
      <input type="text" placeholder="Busacar gifs" onChange={onInputChange} />
    </form>
  );
};
