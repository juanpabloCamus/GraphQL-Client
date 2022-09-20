import {gql, useLazyQuery} from '@apollo/client'
import { useEffect, useState } from 'react'

const FIND_PERSON = gql`
query findPersonByName($name: String!){
    findPerson(name: $name){
        name
        phone
    }
}
`
export const Persons = ({persons}) => {

    const [getPerson, result] = useLazyQuery(FIND_PERSON)
    const [person, setPerson] = useState(null)

    const showPerson = (name) => {
        console.log(name);
        getPerson({ variables: { name: name } })
    }

    useEffect(() => {
        if (result.data) {
            console.log(result.data.findPerson);
            setPerson(result.data.findPerson)
        }
    }, [result])


    if (person) {
        return (
            <div>
                <h2>{person.name}</h2>
                <h3>{person.phone}</h3>
                <button onClick={() => setPerson(null)}>close</button>
            </div>
        )
    }

    return(
        <div>
            <h2>Persons</h2>
            {persons.map(p => 
            <div 
                key={p.id} 
                style={{cursor:"pointer",padding:"10px",margin:"10px",border:"1px solid black"}}
                onClick={() => {showPerson(p.name)}}>
                {p.name}
            </div>
            )}
        </div>
    )
}