import React, { useState} from "react"
import "./form.css"

const Form = (props) => {
    //state to hold the year
    const [formData, setFormData] = useState ({})

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(formData)
        setFormData("")
    }

    const handleChange = (event) => {
        setFormData(event.target.value)
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    className="search-bar"
                    type="number"
                    min="1950"
                    max="2021"
                    placeholder="Year"
                    value={formData}
                    onChange={handleChange}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Form