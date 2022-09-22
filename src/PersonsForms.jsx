import {gql} from '@apollo/client'
import { useState } from 'react'

const CREATE_PERSON = gql`
    mutation createPerson($name: String!, $phone: String, $street: String!, $city: String!){
        addPerson {
            name: $name
            phone: $phone
            street: $street
            city: $city
        }{
            name
            phone
            address
            id
        }
    }
`

export const PersonForm = () => {
    const [person, setPerson] = useState({
        name,
        phone,
        street,
        city
    })

    const handleSubmit = e => {
        e.preventDefault()
        setPerson({})
    }

    const handleChange = e => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2>Create Person</h2>
            <form onSubmit={handleSubmit}>
                <input value={name} name="name" placeholder='name' onChange={handleChange}></input>
                <input value={phone} name="phone" placeholder='phone' onChange={handleChange}></input>
                <input value={street} name="street" placeholder='street' onChange={handleChange}></input>
                <input value={city} name="city" placeholder='city' onChange={handleChange}></input>
                <button>Add Person</button>
            </form>
        </div>
    )
}