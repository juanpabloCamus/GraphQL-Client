import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'

const CREATE_PERSON = gql`
    mutation createPerson($name: String!, $phone: String, $street: String!, $city: String!){
        addPerson (
            name: $name
            phone: $phone
            street: $street
            city: $city
        ){
            name
            phone
            address
            id
        }
    }
`

export const PersonForm = () => {

    const [person, setPerson] = useState({
        name:"",
        phone:"",
        street:"",
        city:""
    })

    const [ createPerson ] = useMutation(CREATE_PERSON)

    const handleSubmit = e => {
        e.preventDefault()

        createPerson({variables: {
            name: person.name,
            phone: person.phone,
            street: person.street,
            city: person.city
        }})

        setPerson({
            name:"",
            phone:"",
            street:"",
            city:""
        })
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
            <form style={{display:'flex', flexDirection:'column', gap:"5px"}} onSubmit={handleSubmit}>
                <input value={person.name} name="name" placeholder='name' onChange={handleChange}></input>
                <input value={person.phone} name="phone" placeholder='phone' onChange={handleChange}></input>
                <input value={person.street} name="street" placeholder='street' onChange={handleChange}></input>
                <input value={person.city} name="city" placeholder='city' onChange={handleChange}></input>
                <button>Add Person</button>
            </form>
        </div>
    )
}