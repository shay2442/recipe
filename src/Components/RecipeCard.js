import React from 'react'


function RecipeCard({recipe, handleDelete}) {
    const {id, title, from, category, notes} = recipe


    return (
        
        <div className='card' >
            <h2 className='title'>{title}</h2>
            <h3 className='from'>{from}</h3>
            <div className='category'>{category}</div>
            <div className='notes'>{notes}</div>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
       
    )
}

export default RecipeCard;

