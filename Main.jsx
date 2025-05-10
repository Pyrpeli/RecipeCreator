import React from "react"

const Main = () => {

    const [ingredients, addIngredient] = React.useState([])


    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>

    ))

    function formSubmitted(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        addIngredient(prevIngredients => [...prevIngredients, newIngredient])
        ingredientsList.push(newIngredient)
        console.log(ingredientsList)
    }
    
return (
    <>
    <div className="formcontainer">
    <form onSubmit={formSubmitted} className="addingridientform" acceptCharset="utf-8">
        <input type="text" placeholder="type and ingredient to add for your recipe e.g. Onion" aria-label="Add an ingredient" name="ingredient" />
        <button>Add an ingredient</button>
    </form>
    </div>
    <ul>{ingredientListItems}</ul>
    </>
)
}

export default Main