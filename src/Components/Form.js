import React from 'react'
import {useState} from 'react'

function Form({onAddItem}) {

    const initialState={
        title: '',
        from: '',
        category: '',
        notes: '' }

        const [formData, setFormData] = useState(initialState)

        function handleChange(e) {
            setFormData( {...formData, [e.target.name]: e.target.value})
        }

        function handleSubmit(e) {
            e.preventDefault()
            fetch ('http://localhost:9292/recipes', {
                method: "POST",
                headers: {"Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            })
            .then (r => r.json())
            .then ((newItem) => {
                onAddItem(newItem)
                setFormData(initialState)})
            }

    return(
        <form onSubmit={handleSubmit} className='form'>
            <label>Title:
                <input type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                ></input>
            </label>


            <label>From:
                <input type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
                ></input>
            </label>

                    <label>Notes:
                <input type="text"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                ></input>
            </label>

            <label>
                Category:
                <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            >
                <option value='all'>Type of Dish</option>
                <option value='Appetizer'>Appetizer</option>
                <option value='Side Dish'>Side Dish</option>
                <option value='Main Dish'>Main Dish</option>
                <option value='Dessert'>Dessert</option>
                <option value='Drink'>Drink</option>
                <option value='Other'>Other</option>
                    </select></label>

                    <button className='submit-bttn' type="submit">Add Recipe</button>

        </form>
    )
}

export default Form;