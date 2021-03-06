import React from 'react'
import { useState, useEffect} from 'react';
import RecipeCard from './RecipeCard'
import Form from './Form'

function RecipesContainer() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/recipes')
        .then(r => r.json())
        .then(data => setRecipes(data))
    },[])

    function addItem(newItem) {
        setRecipes([newItem,...recipes])
    }


    function handleDelete(id) {

        fetch(`http://localhost:9292/recipes/${id}`,{
            method: 'DELETE',
        })
        .then(r => r.json())
        .then((data) => {
            const updatedRecipes = recipes.filter((recipe) => id !== recipe.id) 
            setRecipes(updatedRecipes)
        })
        
    }

    return(
        <div>
            <Form onAddItem={addItem} />
        <div className='card-container'>
            {recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} handleDelete={handleDelete} />)}</div>

        </div>
    )
}

export default RecipesContainer;