import React from "react"

const Main = () => {

    const [ingredients, addIngredient] = React.useState([])


    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>

    ))

    function submitIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        addIngredient(prevIngredients => [...prevIngredients, newIngredient])

    }
    
return (
    <>
    <div className="formcontainer">
    <form action={submitIngredient} className="addingridientform" acceptCharset="utf-8">
        <input type="text" placeholder="type and ingredient to add for your recipe e.g. Onion" aria-label="Add an ingredient" name="ingredient" />
        <button>Add an ingredient</button>
    </form>
    </div>
    <ul>{ingredientListItems}</ul>
    </>
)
}

export default Main